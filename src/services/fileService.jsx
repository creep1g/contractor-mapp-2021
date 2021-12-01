import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;
const systemDirectory = `${FileSystem.documentDirectory}system`;

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

// Settings 

const setupSettings = async () => {
    const dir = await FileSystem.getInfoAsync(systemDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(systemDirectory);
        const settings = {
            "nextId": 1,
            "hasImported": false,
        };    
        await onException(() => FileSystem.writeAsStringAsync(`${systemDirectory}/settings.json`, JSON.stringify(settings)));
    }
}

export const getSettings = async () => {
    return await onException(() => FileSystem.readAsStringAsync(`${systemDirectory}/settings.json`), {
        encoding: FileSystem.EncodingType.UTF8
    });
}

export const updateSettings = async (newSettings) => {
    await onException(() => FileSystem.deleteAsync(`${systemDirectory}/settings.json`, {idempotent: true}));
    await onException(() => FileSystem.writeAsStringAsync(`${systemDirectory}/settings.json`, JSON.stringify(newSettings)));
}

export const nextId = async () => {
    let settings = JSON.parse(await getSettings());
    settings.nextId += 1;
    await updateSettings(settings);
    return settings.nextId - 1;
}

export const hasImported = async () => {
    const settings = JSON.parse(await getSettings());
    return settings.hasImported;
}

export const importing = async () => {
    const settings = JSON.parse(await getSettings());
    settings.hasImported = true;
    await updateSettings(settings);
}

// Tools

export const cleanDirectory = async () => {
    //await onException(() => FileSystem.deleteAsync(imageDirectory));
    await onException(() => FileSystem.deleteAsync(contactDirectory));
    await onException(() => FileSystem.deleteAsync(systemDirectory));
}
cleanDirectory();

cleanDirectory();
export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const setupDirectory = async (directoryName) => {
    const dir = await FileSystem.getInfoAsync(directoryName);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(directoryName);
    }
}

// Contact

export const addContact = async newContact => {
    var uid = uuid.v1();
    console.log(`${contactDirectory}/${newContact.fileName}-${uid}.json`);
    await setupDirectory(contactDirectory);
    newContact.location = `${contactDirectory}/${newContact.fileName}-${uid}.json`;
    await onException(() => FileSystem.writeAsStringAsync(`${contactDirectory}/${newContact.fileName}-${uid}.json`, JSON.stringify(newContact)));
    return `${contactDirectory}/${newContact.fileName}-${uid}.json`;
}

export const updateContact = async contact => {
    return await onException(() => FileSystem.writeAsStringAsync(contact.location, JSON.stringify(contact)));
};

export const removeContact = async location => {
    return await onException(() => FileSystem.deleteAsync(location, {idempotent: true}));
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

export const getAllContacts = async () => {
    await setupDirectory(contactDirectory);
    await setupSettings();
    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
    return Promise.all(result.map(async contact => {
        return {
            name: contact,
            type: 'string',
            file: await loadContact(contact)
        }
    }));
}

