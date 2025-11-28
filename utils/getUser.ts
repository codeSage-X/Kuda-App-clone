import * as SecureStorage from 'expo-secure-store';

export async function getUserDetails() {
  try {
    const userDetailsString = await SecureStorage.getItemAsync("userDetails");
    if (userDetailsString) {
      const userDetails = JSON.parse(userDetailsString);
      return userDetails;
    }
  } catch (error) {
    console.error("Error retrieving user details:", error);
    return null;
  }
}
