import axios from 'axios';

export const fetchTweets = async (page, filter) => {
  let queries;
  if (filter.value === 'all') {
    queries = '';
  } else if (filter.value === 'follow') {
    queries = `isFollowed=${false}`;
  } else if (filter.value === 'following') {
    queries = `isFollowed=${true}`;
  }

  try {
    const { data } = await axios.get(
      `https://64302a62c26d69edc88c56e4.mockapi.io/api/v1/users?${queries}&page=${page}&limit=3`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchfilteredTweets = async filter => {
  let queries;
  if (filter.value === 'all') {
    queries = '';
  } else if (filter.value === 'follow') {
    queries = `isFollowed=${false}`;
  } else if (filter.value === 'following') {
    queries = `isFollowed=${true}`;
  }

  try {
    const { data } = await axios.get(
      `https://64302a62c26d69edc88c56e4.mockapi.io/api/v1/users?${queries}`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const togglefollowUser = async user => {
  try {
    const { data } = await axios.put(
      `https://64302a62c26d69edc88c56e4.mockapi.io/api/v1/users/${user.id}`,
      {
        ...user,
        isFollowed: !user.isFollowed,
        followers: user.isFollowed
          ? (user.followers -= 1)
          : (user.followers += 1),
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
