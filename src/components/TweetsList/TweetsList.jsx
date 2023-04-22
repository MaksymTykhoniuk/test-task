import { Tweet } from '../Tweet/Tweet';
import { Container, TweetsUsersList } from './TweetsList.styled';

export const TweetsList = ({ data }) => {
  return (
    <Container>
      <TweetsUsersList>
        {data.map(item => (
          <Tweet key={item.id} data={item} />
        ))}
      </TweetsUsersList>
    </Container>
  );
};
