import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;

  // grid-template-columns: repeat(auto-fit, 360px);
  // gap: 16px;
`;

export const TweetsUsersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  height: 460px;
  margin-bottom: 15px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: relative;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
`;

export const FollowingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: relative;
  width: 196px;
  height: 50px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
`;

export const HeaderImage = styled.img`
  // position: absolute;
  // width: 308px;
  // height: 168px;
  // left: 36px;
  // top: 28px;
`;
