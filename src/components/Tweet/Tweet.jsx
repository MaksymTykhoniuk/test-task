import Image from '../../assets/picture2_1.png';
import Logo from '../../assets/Logo.png';
import Frame from '../../assets/Frame.png';
import {
  FollowButton,
  CardWrapper,
  CardText,
  FollowingButton,
  HeaderImage,
  UserAvatar,
  CompanyLogo,
  Line,
  Circut,
} from './Tweet.styled';

export const Tweet = ({ item, followUser }) => {
  return (
    <>
      <CardWrapper>
        <div style={{ width: 308, height: 168, marginBottom: 88 }}>
          <CompanyLogo src={Logo} alt="Logo" />
          <HeaderImage src={Image} alt="Header image" />
        </div>

        <Line />
        <Circut src={Frame} alt="Frame" />
        <UserAvatar src={item.avatar} alt="User Avatar" />

        <CardText>{item.tweets} tweets </CardText>
        <CardText>{item.followers.toLocaleString('en-US')} followers </CardText>
        {!item.isFollowed ? (
          <FollowButton onClick={() => followUser(item)} type="button">
            follow
          </FollowButton>
        ) : (
          <FollowingButton onClick={() => followUser(item)} type="button">
            following
          </FollowingButton>
        )}
      </CardWrapper>
    </>
  );
};
