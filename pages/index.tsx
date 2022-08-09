import { MainPageTemplate } from 'components';
import { useGeolocation } from 'hooks';

function Home() {
  // coupleData를 fetch하는 로직, 추후 고도화 예정
  const getCoupleData = () => {
    const dummyData = {
      startDate: '2021-11-19',
      me: {
        profileImagePath: null,
        nickName: 'myname',
      },
      you: {
        profileImagePath: null,
        nickName: 'yourname',
      },
    };
    return dummyData;
  };
  const dummyCoupleData = getCoupleData();

  // postList를 fetch하는 로직, 추후 고도화 예정
  const getPostList = () => {
    // api 구현 아직..!!
    const dummyData = [
      {
        postId: '1',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '첫번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '2',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '두번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '3',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '세번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '4',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '네번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '5',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '다섯번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '6',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '여섯번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '7',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '일곱번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '8',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '여덟번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '9',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '아홉번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
      {
        postId: '10',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '열번째 포스트 썸네일',
        createDate: '2022-03-18',
      },
    ];
    return dummyData;
  };
  const dummyPostListData = getPostList();

  // 지도 첫 렌더링 중심점을 잡는 로직
  const {
    coords: { latitude: lat, longitude: lng },
  } = useGeolocation();

  return (
    <MainPageTemplate
      coupleData={dummyCoupleData}
      postList={dummyPostListData}
      coordinate={{ latitude: lat, longitude: lng }}
    />
  );
}
export default Home;
