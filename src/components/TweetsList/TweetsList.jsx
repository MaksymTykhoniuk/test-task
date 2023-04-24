import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { Tweet } from '../Tweet/Tweet';
import { BackLink } from '../BackLink/BackLink';
import {
  Container,
  TweetsUsersList,
  Button,
  ButtonWrapper,
} from './TweetsList.styled';
import {
  fetchTweets,
  togglefollowUser,
  fetchfilteredTweets,
} from 'services/fethUsers';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

export const TweetsList = () => {
  const [selectedOption, setSelectedOption] = useState('all');
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    if (selectedOption.value === 'all') {
      setPage(1);
    } else if (selectedOption.value === 'follow') {
      setPage(1);
    } else if (selectedOption.value === 'following') {
      setPage(1);
    }
  }, [selectedOption.value]);

  const updateTweetsMutation = useMutation(item => togglefollowUser(item), {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const { data, isLoading, isError } = useQuery(
    ['users', page, selectedOption],
    () => fetchTweets(page, selectedOption),
    { keepPreviousData: true }
  );

  const { data: filter, isFetched } = useQuery(
    ['users', selectedOption],
    () => fetchfilteredTweets(selectedOption),
    { keepPreviousData: true }
  );

  const handleLoadNextBtn = () => setPage(prev => prev + 1);
  const handleLoadPrevBtn = () => setPage(prev => prev - 1);
  const handleFollowUser = item => updateTweetsMutation.mutate(item);

  if (isLoading) {
    return <p>loading page......</p>;
  }

  if (isError) {
    return <p>oooops, something goes wrong 😣</p>;
  }

  return (
    <Container>
      <BackLink to={backLinkHref}>Back home</BackLink>
      <div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <TweetsUsersList>
        {data.map(item => (
          <Tweet key={item.id} item={item} followUser={handleFollowUser} />
        ))}
      </TweetsUsersList>
      {isFetched && filter.length > 3 && (
        <ButtonWrapper>
          <Button
            disabled={isLoading || page === 1}
            onClick={handleLoadPrevBtn}
            type="button"
          >
            load previous
          </Button>
          <Button
            disabled={isLoading || page === filter.length / 3}
            onClick={handleLoadNextBtn}
            type="button"
          >
            load next
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  );
};
