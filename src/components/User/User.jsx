import {
  FollowButtonChecked,
  FollowButtonUnchecked,
  Followers,
  HeroContainer,
  Line,
  LogoContainer,
  Tweets,
  UserContainer,
  UserImage,
  UserImageContainer,
  UserName,
} from './User.styled';
import { ReactComponent as Logo } from 'images/logo.svg';
import hero from 'images/hero.png';
import userphoto from 'images/hansel.png';

export const User = ({ data, isfollowed, changefollow }) => {
  const { id, user, tweets = 0, followers = 0 } = data;
  const isFollowed = isfollowed({ id });
  const isFollowingFollowers = isFollowed ? followers + 1 : followers;
  console.log(user, isFollowed);
  const result = (
    <UserContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeroContainer>
        <img src={hero} alt="" />
      </HeroContainer>
      <Line />
      <UserImageContainer>
        <UserImage src={userphoto} />
      </UserImageContainer>
      <UserName>{user}</UserName>
      <Tweets>{tweets} TWEETS</Tweets>
      <Followers>{isFollowingFollowers} FOLLOWERS</Followers>
      {isFollowed ? (
        <FollowButtonChecked
          type="button"
          onClick={() => {
            changefollow({ id });
          }}
        >
          FOLLOWING
        </FollowButtonChecked>
      ) : (
        <FollowButtonUnchecked
          type="button"
          onClick={() => {
            changefollow({ id });
          }}
        >
          Follow
        </FollowButtonUnchecked>
      )}
    </UserContainer>
  );
  return <>{result}</>;
};
