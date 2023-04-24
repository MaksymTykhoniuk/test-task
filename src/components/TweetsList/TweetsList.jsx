import { Tweet } from '../Tweet/Tweet';
import { BackLink } from '../BackLink/BackLink';
import { useLocation } from 'react-router-dom';
import { Container, TweetsUsersList } from './TweetsList.styled';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  fetchTweets,
  togglefollowUser,
  fetchfilteredTweets,
} from 'services/fethUsers';
import Select from 'react-select';

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

  const { data: filter } = useQuery(
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
      {filter.length > 3 && (
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

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: relative;
  width: 196px;
  height: 50px;
  margin-top: 18px;
  margin-bottom: 36px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  text-transform: uppercase;
  color: #373737;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
