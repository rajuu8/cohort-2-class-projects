const users = [
  {
    fullname: "Aarav Sharma",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Web Developer",
    description: "Passionate frontend developer specializing in React and modern UI design.",
    tags: ["JavaScript", "React", "Frontend", "UI/UX"]
  },
  {
    fullname: "Priya Khadka",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Graphic Designer",
    description: "Creative designer with expertise in branding, posters, and modern illustration.",
    tags: ["Photoshop", "Illustrator", "Branding", "Design"]
  },
  {
    fullname: "Kabir Singh",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Ethical Hacker",
    description: "Security researcher focusing on penetration testing and network security.",
    tags: ["Linux", "Cybersecurity", "Kali Linux", "Networking"]
  },
  {
    fullname: "Sita Lama",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Content Writer",
    description: "Writes blogs, scripts, and marketing content with SEO-focused approach.",
    tags: ["SEO", "Blogging", "Copywriting", "Content Strategy"]
  },
  {
    fullname: "Rahul Das",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    profession: "Mobile App Developer",
    description: "Android & iOS app developer who loves building fast and clean mobile apps.",
    tags: ["Android", "Flutter", "Kotlin", "iOS"]
  }
];

let sum = '';

users.forEach((r)=> {
    sum = sum + `
        <div class="card">
            <img src= ${r.img} >
            <h2>${r.fullname}</h2>
            <h4>${r.profession}</h4>
            <p>${r.description}</p>
        </div>`
})


let main = document.querySelector('main')

main.innerHTML = sum