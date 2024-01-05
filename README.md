# 🌿 Nourish

Nourish is an innovative application aimed at connecting community members in Philadelphia with nearby community fridges. Our mission is to promote communal food sharing and ensure convenient access to essential food resources.

## 📖 Description

Nourish allows users to easily locate community fridges throughout Philadelphia. The app also includes a community board, where members can sign up to share updates about fridge restocking, express community needs or offers, and report on any maintenance required. This project is committed to fostering a sense of community and supporting local food security initiatives.

## Key Features

1. **Interactive Map**: A user-friendly interactive map displaying community fridges in the Philadelphia area. Users can explore fridges near them and search for fridges by zip code.

2. **Fridge Locations Page**: This page provides a comprehensive view of all the community fridges in Philadelphia. It includes a dropdown menu that allows users to filter fridges by zip code.

3. **Detailed Fridge Information**: By clicking on "Learn More" for individual fridges, users can access detailed information about each fridge. This includes social media links, the address, and information on how to volunteer.

4. **Community Board**: A dynamic space where members can post about restockings, express needs or offers related to the fridges and the community, and report if any fridges need maintenance.

## 🛠 Built With

- MongoDB
- Express.js
- React
- Node.js
- Tailwind CSS - For modern, responsive UI design.
- Flowbite - A set of Tailwind CSS components to enhance UI development.

## 🚀 Getting Started

These instructions will help you get a copy of Nourish running on your local machine.

### Prerequisites

Ensure you have npm installed:

```bash
npm install npm@latest -g
```


### 📦 Installation
```bash
1. Clone the Nourish repository:
2. Install NPM packages:
```

### 🌐 Environment Variables
```bash
Set up the necessary environment variables in your `.env` file.
```

## 💡 Usage

Use Nourish to:
- Find community fridges in Philadelphia.
- Participate in the community board for sharing updates and requests.
- Contribute to the maintenance and stock of local community fridges.

## 🛣 Roadmap

Upcoming features for Nourish include:
- Expanding to additional locations.
- Implementing real-time fridge status updates.
- Adding user profiles for community recognition.

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Here's how you can contribute:
- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE.txt).

## 📞 Contact

Project Lead - jacinthadev8@gmail.com

Project Link: [Nourish](https://github.com/Resilient-Labs/nourish)

## 📚 Challenges 

Delegating Work
Efficient delegation is crucial. Tasks are assigned based on strengths, expertise, and workload. Regular communication ensures everyone is on the same page, addressing concerns promptly.

Adapting to New Ideas and Issues
The development process is dynamic. We readjust plans when necessary, allowing us to incorporate innovative solutions and address emerging issues promptly.

Time Management
We value time as a critical resource. Prioritizing tasks, setting milestones, and closely monitoring progress ensure we deliver a high-quality product within deadlines.

Handling Errors on the Fly
Errors are inevitable. We take a proactive approach, collaboratively troubleshooting issues, documenting solutions, and ensuring the project stays on course.

Staying on Track
Project goals are paramount. Regularly revisiting and updating our project plan ensures our efforts align with objectives. Continuous communication and adaptation keep the project on track.

Event Handling:
Handling events in Leaflet and synchronizing them with React's events requires careful attention to ensure smooth functionality.

Performance Optimization:
Efficient rendering and preventing unnecessary re-renders, especially with a large number of markers or dynamic data updates, pose challenges. We aim to achieve optimization without solely relying on Redux for state handling.

Data Passing between Sibling Components:
Dynamically updating the Leaflet interactive map for the Fridge Map component and Fridge List component based on filtered zip codes demands effective data passing between sibling components.

Parent Component Communication:
Implementing a robust mechanism for the parent component to pass filtered zip code data to both the Leaflet map and Fridge List components is a critical aspect of seamless integration.

Real-Time Updates:
Ensuring real-time responsiveness in both the Leaflet map and Fridge List components to changes in filtered zip code data is crucial for providing users with a synchronized and seamless experience.
