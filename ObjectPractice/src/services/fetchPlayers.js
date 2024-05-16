export const Services = {
  getPlayers() {
    const data = [
      { name: "LeBron", lastName: "James", weight: 100, teamName: "Lakers" },
      { name: "Thomas", lastName: "Bryant", weight: 100, teamName: "Lakers" },
      { name: "Zach", lastName: "Lofton", weight: 270, teamName: "Pistons" },
      { name: "Anthony", lastName: "Davis", weight: 100, teamName: "Lakers" },
      { name: "Jabari", lastName: "Bird", weight: 230, teamName: "Celtics" },
      { name: "Keenan", lastName: "Evans", weight: 170, teamName: "Pistons" },
      { name: "Michael", lastName: "Smith", weight: 100, teamName: "Celtics" },
    ];
    
      return Promise.resolve(data);
      
  },
};
