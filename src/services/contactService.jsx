import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export const getContacts = async () => {
    const {status} = await Permissions.getPermission(Permissions.CONTACTS);
    if (status === 'granted') {
        const {data} = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.FirstName,
            ],
        });
        if (data.length > 0) {
            const contact = data[0];
            return contact;
        } 
    };
};
