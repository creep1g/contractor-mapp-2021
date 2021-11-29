import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export const getContacts = async () => {
    const {status} = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
        const {data} = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.FirstName,
            ],
        });
        if (data.length > 0) {
            const contact = data[0];
            console.log(data);
            return contact;
        } 
    };
};
