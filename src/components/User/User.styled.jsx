import styled from '@emotion/styled';

export const UserContainer = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  color: #fff;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const HeroContainer = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserImageContainer = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 1;
  min-width: 80px;
  min-height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const UserImage = styled.img`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #5736a3;
`;

const TextTemplate = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const UserName = styled(TextTemplate)`
  margin-top: 284px;
  margin-bottom: 16px;
`;

export const Tweets = styled(TextTemplate)`
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Followers = styled(TextTemplate)`
  margin-top: 0;
  margin-bottom: 26px;
`;

const FollowButtonTemplate = styled.button`
  cursor: pointer;
  display: block;
  width: 196px;
  margin-bottom: 36px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: 'Montserrat';
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const FollowButtonUnchecked = styled(FollowButtonTemplate)`
  background: #ebd8ff;
`;

export const FollowButtonChecked = styled(FollowButtonTemplate)`
  background: #5cd3a8;
`;
