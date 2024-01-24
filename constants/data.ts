// User data
const users = [
  {
    id: "1",
    name: "John Doe",
    image: require("../assets/man1.jpeg"),
    username: "john_doe",
    bio: "Lorem ipsum dolor sit amet.",
    posts: [
      {
        id: "1",
        image: require("../assets/man1_post1.webp"),
        caption: "Beautiful Day",
        likes: 123,
        liked: true,
        comments: [
          { id: "1", username: "user1", text: "Great photo!" },
          { id: "2", username: "user2", text: "Love it!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "jane_smith",
        messages: [
          { id: "1", from: "john_doe", message: "Hello", time: "12:00 PM" },
          {
            id: "2",
            from: "jane_smith",
            message: "Hi John!",
            time: "12:05 PM",
          },
        ],
      },
      {
        withUser: "bob_johnson",
        messages: [
          { id: "1", from: "bob_johnson", message: "Hey!", time: "2:00 PM" },
          { id: "2", from: "john_doe", message: "Hello Bob!", time: "2:05 PM" },
        ],
      },
      {
        withUser: "emma_white",
        messages: [
          {
            id: "1",
            from: "emma_white",
            message: "Hi there!",
            time: "3:30 PM",
          },
          { id: "2", from: "user7", message: "Hello Emma!", time: "3:35 PM" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    image: require("../assets/woman1.webp"),
    username: "jane_smith",
    bio: "Consectetur adipiscing elit.",
    posts: [
      {
        id: "2",
        image: require("../assets/woman1_post1.webp"),
        caption: "Sunset vibes",
        likes: 150,
        liked: true,
        comments: [
          { id: "1", username: "user3", text: "Amazing shot!" },
          { id: "2", username: "john_doe", text: "Beautiful colors!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "jane_doe",
        messages: [
          { id: "1", from: "jane_smith", message: "Hi!", time: "1:30 PM" },
          {
            id: "2",
            from: "john_doe",
            message: "Hello there!",
            time: "1:35 PM",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Bob Johnson",
    image: require("../assets/man2.jpeg"),
    username: "bob_johnson",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    posts: [
      {
        id: "3",
        image: require("../assets/man1_post1.webp"),
        caption: "Exploring nature",
        likes: 80,
        liked: false,
        comments: [
          { id: "1", username: "user5", text: "Fantastic view!" },
          { id: "2", username: "john_doe", text: "Nature at its best!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "bob_johnson",
        messages: [
          { id: "1", from: "bob_johnson", message: "Hey!", time: "2:00 PM" },
          { id: "2", from: "john_doe", message: "Hello Bob!", time: "2:05 PM" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Emma White",
    image: require("../assets/woman2.png"),
    username: "emma_white",
    bio: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    posts: [
      {
        id: "4",
        image: require("../assets/woman1_post1.webp"),
        caption: "City lights",
        likes: 200,
        liked: true,
        comments: [
          { id: "1", username: "user7", text: "Stunning view!" },
          { id: "2", username: "user8", text: "Love the cityscape!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "emma_white",
        messages: [
          {
            id: "1",
            from: "emma_white",
            message: "Hi there!",
            time: "3:30 PM",
          },
          { id: "2", from: "user7", message: "Hello Emma!", time: "3:35 PM" },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Alex Turner",
    image: require("../assets/man3.jpeg"),
    username: "alex_turner",
    bio: "Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    posts: [
      {
        id: "5",
        image: require("../assets/man1_post1.webp"),
        caption: "Mountain trek",
        likes: 180,
        liked: true,
        comments: [
          { id: "1", username: "user9", text: "Amazing adventure!" },
          {
            id: "2",
            username: "user10",
            text: "Those views are breathtaking!",
          },
        ],
      },
    ],
    conversations: [
      {
        withUser: "alex_turner",
        messages: [
          { id: "1", from: "alex_turner", message: "Hey!", time: "4:00 PM" },
          { id: "2", from: "user9", message: "Hello Alex!", time: "4:05 PM" },
        ],
      },
    ],
  },

  {
    id: "6",
    name: "Sophie Miller",
    image: require("../assets/man1.jpeg"),
    username: "sophie_miller",
    bio: "Pellentesque in ipsum id orci porta dapibus.",
    posts: [
      {
        id: "6",
        image: require("../assets/woman1_post1.webp"),
        caption: "Beach vibes",
        likes: 250,
        liked: true,
        comments: [
          { id: "1", username: "user11", text: "Fantastic beach day!" },
          { id: "2", username: "john_doe", text: "Wish I was there!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "sophie_miller",
        messages: [
          { id: "1", from: "sophie_miller", message: "Hi!", time: "5:00 PM" },
          {
            id: "2",
            from: "user11",
            message: "Hello Sophie!",
            time: "5:05 PM",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Chris Evans",
    image: require("../assets/man4.jpeg"),
    username: "chris_evans",
    bio: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    posts: [
      {
        id: "7",
        image: require("../assets/man1_post1.webp"),
        caption: "City exploration",
        likes: 180,
        liked: false,
        comments: [
          { id: "1", username: "user13", text: "Love the urban vibes!" },
          { id: "2", username: "user14", text: "Great city shots!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "chris_evans",
        messages: [
          {
            id: "1",
            from: "chris_evans",
            message: "Hey there!",
            time: "6:30 PM",
          },
          {
            id: "2",
            from: "john_doe",
            message: "Hello Chris!",
            time: "6:35 PM",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    name: "Olivia Davis",
    image: require("../assets/woman4.jpeg"),
    username: "olivia_davis",
    bio: "Nulla quis lorem ut libero malesuada feugiat.",
    posts: [
      {
        id: "8",
        image: require("../assets/man1_post1.webp"),
        caption: "Nature walk",
        likes: 220,
        liked: true,
        comments: [
          { id: "1", username: "user15", text: "Such a peaceful walk!" },
          { id: "2", username: "user16", text: "Nature is amazing!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "olivia_davis",
        messages: [
          { id: "1", from: "olivia_davis", message: "Hello!", time: "7:00 PM" },
          { id: "2", from: "john_doe", message: "Hi Olivia!", time: "7:05 PM" },
        ],
      },
    ],
  },
  {
    id: "9",
    name: "Daniel Lee",
    image: require("../assets/man1.jpeg"),
    username: "daniel_lee",
    bio: "Donec sollicitudin molestie malesuada.",
    posts: [
      {
        id: "9",
        image: require("../assets/man1_post1.webp"),
        caption: "Mountain sunrise",
        likes: 190,
        liked: true,
        comments: [
          { id: "1", username: "user17", text: "Breathtaking sunrise!" },
          { id: "2", username: "user18", text: "Amazing shot, Daniel!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "daniel_lee",
        messages: [
          { id: "1", from: "daniel_lee", message: "Hi!", time: "8:30 PM" },
          {
            id: "2",
            from: "john_doe",
            message: "Hello Daniel!",
            time: "8:35 PM",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Grace Wilson",
    image: require("../assets/woman5.webp"),
    username: "grace_wilson",
    bio: "Vivamus suscipit tortor eget felis porttitor volutpat.",
    posts: [
      {
        id: "10",
        image: require("../assets/man1_post1.webp"),
        caption: "Cherry blossoms",
        likes: 200,
        liked: false,
        comments: [
          { id: "1", username: "user19", text: "Beautiful blossoms!" },
          { id: "2", username: "user20", text: "Spring vibes!" },
        ],
      },
    ],
    conversations: [
      {
        withUser: "john_doe",
        lastMessage: "Hello!",
        messages: [
          { id: "1", from: "grace_wilson", message: "Hello!", time: "9:00 PM" },
          { id: "2", from: "john_doe", message: "Hi Grace!", time: "9:05 PM" },
        ],
      },
    ],
  },
];

export default users;
