const mongoose = require('mongoose');
const Service = require('./model/service'); // Update the path to your service model
const dotenv = require("dotenv");
dotenv.config();
// MongoDB connection string

// Sample service data
const serviceData = {
    name: "Orthopedic Care",
    features: [ "On demand Consultation", "Online Appointments"],
    image: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/82/2024/06/Non-Surgical-Treatment-Options-Total-Orthopedic-Care-Pembroke-Pines-FL.jpg",
    description:"Orthopedic care focuses on the diagnosis, treatment, and prevention of musculoskeletal disorders, which affect the bones, joints, muscles, tendons, and ligaments. This type of care addresses a wide range of conditions, from fractures and sprains to chronic conditions like arthritis, osteoporosis, and scoliosis. Orthopedic services often involve both non-surgical and surgical approaches, including physical therapy, medications, and lifestyle modifications to manage pain and improve mobility.",
    title:"Orthopedic Care",
};
// Function to seed the service
const seedService = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Insert the service
        const service = new Service(serviceData);
        await service.save();
        console.log('Service added successfully:', service);

        // Disconnect from the database
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding service:', error);
    }
};

// Run the seeder
seedService();
  
  