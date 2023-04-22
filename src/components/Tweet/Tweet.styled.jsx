import styled from '@emotion/styled';

export const CardWrapper = styled.li`
  position: relative;
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

export const CardText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  margin-bottom: 8px;
  margin-top: 8px;

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
  margin-top: 18px;
  margin-bottom: 36px;
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
  margin-top: 18px;
  margin-bottom: 36px;

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
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const UserAvatar = styled.img`
  display: block;
  border-radius: 85.9232px;
  position: absolute;
  width: 62px;
  height: 62px;
  top: 185px;
  left: 160px;
  margin-bottom: 18px;
`;

export const CompanyLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circut = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 178px;
  left: 150px;
  border-radius: 50%;
  z-index: 999999;
`;
