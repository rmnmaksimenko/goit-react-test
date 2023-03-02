export const User = ({ data, isfollowed, changefollow }) => {
  const { id, user, tweets = 0, followers = 0 } = data;
  const isFollowed = isfollowed({ id });
  const isFollowingFollowers = isFollowed ? followers + 1 : followers;
  console.log(user, isFollowed);
  const result = (
    <div className="">
      <h2>{user}</h2>
      <p>{tweets} TWEETS</p>
      <p>{isFollowingFollowers} FOLLOWERS</p>
      {isFollowed ? (
        <button
          type="button"
          onClick={() => {
            changefollow({ id });
          }}
        >
          FOLLOWING
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            changefollow({ id });
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
  return <div>{result}</div>;
};
