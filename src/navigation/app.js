import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Profile from '../screen/Profile';
import DrawerContent from '../components/DrawerContent';
import Booking from '../screen/Booking';
import Payment from '../screen/Payment';
import EditProfile from '../screen/EditProfile';
import ChangePassword from '../screen/ChangePassword';
import MyBooking from '../screen/MyBooking';
import MyWishlist from '../screen/MyWishlist';
import AllEvent from '../screen/AllEvent';

import HeaderDefault from '../components/Header/default';
import Order from '../screen/Order';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          header: props => <HeaderDefault {...props} name="Profile" />,
          drawerIcon: ({size, color}) => (
            <Icon name="user-secret" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Booking"
        component={MyBooking}
        options={{
          header: props => <HeaderDefault {...props} name="My Booking" />,
          drawerIcon: ({size, color}) => (
            <Icon name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Wishlist"
        component={MyWishlist}
        options={{
          header: props => <HeaderDefault {...props} name="My Wishlist" />,
          drawerIcon: ({size, color}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{header: props => <HeaderDefault {...props} name="Order" />}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{header: props => <HeaderDefault {...props} name="Payment" />}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          header: props => <HeaderDefault {...props} name="Edit Profile" />,
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          header: props => <HeaderDefault {...props} name="Change Password" />,
        }}
      />
      <Stack.Screen
        name="All Event"
        component={AllEvent}
        options={{
          header: props => <HeaderDefault {...props} name="List Event" />,
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          header: props => <HeaderDefault {...props} name="List Event" />,
        }}
      />
    </Stack.Navigator>
  );
}
