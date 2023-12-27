import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import cars from './data/cars.js';
import User from './models/userModel.js';
import Car from './models/carModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Car.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const prs = createdUsers[1]._id;

    const sampleCars = cars.map((car) => {
        if (car.isUsed) {
            return {
                ...car,
                buyer: null, // Assuming buyer should be null for used cars
                usedCarDetails: [{
                    kmsDriven: car.kmsDriven || 0,
                    age: car.age || 0,
                    city: car.city || '',
                    seller: prs,
                    isAvailable: car.isAvailable || false,
                }],
            };
        }
        // If isNew is true, return the original car without the user property
        return { ...car };
    });

    await Car.insertMany(sampleCars);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Car.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
