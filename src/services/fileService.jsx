import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';
const imageDirectory = `${FileSystem.documentDirectory}images`;
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory);
}

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/');
    const fileName = folderSplit[folderSplit.length - 1];
    await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`));

    return {
        name: fileName,
        type: 'image',
        file: await loadImage(fileName)
    };
}

export const addContact = async newContact => {
    var uid = uuid.v1();
    console.log(`${contactDirectory}/${newContact.name}-${uid}.json`);
    await setupDirectory(contactDirectory);
    newContact.location = `${contactDirectory}/${newContact.name}-${uid}.json`;
    await onException(() => FileSystem.writeAsStringAsync(`${contactDirectory}/${newContact.name}-${uid}.json`, JSON.stringify(newContact)));
    return `${contactDirectory}/${newContact.name}-${uid}.json`;
}

export const updateContact = async contact => {
    return await onException(() => FileSystem.writeAsStringAsync(contact.location, JSON.stringify(contact)));
};

export const removeContact = async location => {
    return await onException(() => FileSystem.deleteAsync(location, {idempotent: true}));
}

export const remove = async name => {
    return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, {idempotent: true}));
}

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}

export const loadContact = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`), {
        encoding: FileSystem.EncodingType.UTF8
    });
}

export const loadForUpdate = async fileName => {
	return await onException(() => FileSystem.readAsStringAsync(`${fileName}`), {
			encoding: FileSystem.EncodingType.UTF8
		});

}

export const setupDirectory = async (directoryName) => {
    const dir = await FileSystem.getInfoAsync(directoryName);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(directoryName);
    }
}

export const getAllContacts = async () => {
    await setupDirectory(contactDirectory)
    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
    return Promise.all(result.map(async contact => {
        return {
            name: contact,
            type: 'string',
            file: await loadContact(contact)
        }
    }));
}

export const getAllImages = async () => {
    // Check if directory exists
    await setupDirectory(imageDirectory);

    const result = await onException(() => FileSystem.readDirectoryAsync(imageDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'image',
            file: await loadImage(fileName)
        };
    }));
}
