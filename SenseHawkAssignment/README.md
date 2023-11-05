This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

In this assignment, you will build a React Native application called Food Zone.
Food Zone will be an online food ordering and delivery platform. This application will allow
hotels, cafés, street food vendors and restaurants to increase the scope of business by
reducing the labor cost involved. It will present information, menus and user reviews in an
interactive and easy-to-use manner. All the restaurants within 10 km of the users’ location
will be listed. They can choose one or more items to place an order which will land in the
cart before checking out. They will get order confirmation once the payment is done.

Task/Assignment : 
Which parts of the application need to be built?
      Food Zone has the following:
      1. Login screen with Firebase Authentication
      2. Home Page - This screen is a list of restaurants with names, ratings, distances etc.
      3. Menu - This contains a list of cuisines with food items under each cuisine. Users
      should be able to select the food items and add them to the cart.
      4. Checkout - This is the final screen where all the selected items along with the total
      price are displayed. A button to proceed with payment is visible.
      Note: Use React Native CLI and typescript for the script.

Application screenshoot 

<img width="453" alt="Screenshot 2023-11-05 at 10 43 08 AM" src="https://github.com/rajupraaa1234/SenseHawkAssignment/assets/48593134/6938f538-26b6-4aca-a94a-f72d3b6219b6">


<img width="455" alt="Screenshot 2023-11-05 at 10 44 01 AM" src="https://github.com/rajupraaa1234/SenseHawkAssignment/assets/48593134/6eb6b260-284b-46bc-af7a-400ae3368e5a">
<img width="452" alt="Screenshot 2023-11-05 at 10 44 17 AM" src="https://github.com/rajupraaa1234/SenseHawkAssignment/assets/48593134/eeaaa349-32ab-4d80-84c4-c8df5e3654bf">
<img width="451" alt="Screenshot 2023-11-05 at 10 44 54 AM" src="https://github.com/rajupraaa1234/SenseHawkAssignment/assets/48593134/c85a7c4c-c886-4fe7-bb5d-666b934d96e4">


