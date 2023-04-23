import { useState } from 'react';
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

export const Tweet = ({ data }) => {
  const [followers, setFollowers] = useState(data.followers);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowButtonClick = () => {
    if (isFollowed) {
      setFollowers(state => state - 1);
    } else {
      setFollowers(state => state + 1);
    }
    setIsFollowed(!isFollowed);
  };

  return (
    <>
      <CardWrapper>
        <div style={{ width: 308, height: 168, marginBottom: 88 }}>
          <CompanyLogo src={Logo} alt="Logo" />
          <HeaderImage src={Image} alt="Header image" />
        </div>

        <Line />
        <Circut src={Frame} alt="Frame" />
        <UserAvatar src={data.avatar} alt="User Avatar" />

        <CardText>{data.tweets} tweets </CardText>
        <CardText> {followers.toLocaleString('en-US')} followers </CardText>
        {!isFollowed ? (
          <FollowButton onClick={handleFollowButtonClick} type="button">
            follow
          </FollowButton>
        ) : (
          <FollowingButton onClick={handleFollowButtonClick} type="button">
            following
          </FollowingButton>
        )}
      </CardWrapper>
    </>
  );
};
