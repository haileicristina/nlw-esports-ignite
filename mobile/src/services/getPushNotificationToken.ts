import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
    const {granted} = await Notifications.getPermissionsAsync();

    if(!granted){
        await Notifications.requestPermissionsAsync();
    }

    if(granted){
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICANTION TOKEN -> ', pushToken.data);

        return pushToken.data; // identificador para enviar para um dispositivo específico
    }
}