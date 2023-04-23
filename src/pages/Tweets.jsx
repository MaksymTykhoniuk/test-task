import { TweetsList } from 'components/TweetsList/TweetsList';

const Tweets = () => {
  return (
    <main>
      <TweetsList />
    </main>
  );
};

export default Tweets;

// const [data, setData] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
// const fT = async page => {
//   try {
//     setIsLoading(true);
//     const resp = await axios.get(
//       `https://64302a62c26d69edc88c56e4.mockapi.io/api/v1/users?page=${page}&limit=3`
//     );

//     setData(resp.data);
//   } catch (error) {
//     setError(error);
//   } finally {
//     setIsLoading(false);
//   }
// };
// useEffect(() => {
//   fT(page);
// }, [page]);
