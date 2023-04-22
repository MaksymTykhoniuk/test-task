import { TweetsList } from 'components/TweetsList/TweetsList';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useState } from 'react';
import styled from '@emotion/styled';

const fetchTweets = async page => {
  const { data } = await axios.get(
    `https://64302a62c26d69edc88c56e4.mockapi.io/api/v1/users?page=${page}&limit=3`
  );

  return data;
};

const Tweets = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(
    ['users', page],
    () => fetchTweets(page),
    { keepPreviousData: true }
  );

  console.log('allTweets', data);

  const handleLoadNextBtn = () => {
    setPage(prev => prev + 1);
  };

  const handleLoadPrevBtn = () => {
    setPage(prev => prev - 1);
  };

  if (isLoading) {
    return <p>loadin......</p>;
  }

  if (isError) {
    return <p>errrrrroooororo;</p>;
  }

  return (
    <main>
      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}
      <TweetsList data={data} />
      <ButtonWrapper>
        <Button disabled={page === 1} onClick={handleLoadPrevBtn} type="button">
          loadprev
        </Button>
        <Button disabled={page === 8} onClick={handleLoadNextBtn} type="button">
          loadnext
        </Button>
      </ButtonWrapper>
    </main>
  );
};

export default Tweets;

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
  justify-content: space-between;
`;
