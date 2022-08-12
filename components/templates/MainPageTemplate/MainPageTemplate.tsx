import { useState } from 'react';
import Link from 'next/link';
import { Button, Map, MapMarkerOverlay, MainSidebar } from 'components';
import { IMainPageTemplateProps } from 'types';
import { MapMarker } from 'react-kakao-maps-sdk';
import * as S from './MainPageTemplate.styles';

export function MainPageTemplate({
  coupleData,
  postList,
  coordinate,
}: IMainPageTemplateProps) {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <S.Container>
      <S.MainSidebarContainer>
        <MainSidebar coupleData={coupleData} postList={postList} />
      </S.MainSidebarContainer>
      <S.MapContainer>
        <Map
          width="100%"
          height="100%"
          center={{
            lat: coordinate.latitude,
            lng: coordinate.longitude,
          }}
        >
          {postList.map((post) => (
            <MapMarker
              key={post.postId}
              position={{
                lat: Number(post.latitude),
                lng: Number(post.longitude),
              }}
              clickable
              onClick={() => {
                setIsOverlayShown(true);
                setSelectedMarker(post.postId);
              }}
            >
              {isOverlayShown && selectedMarker === post.postId && (
                <S.OverlayContainer
                  onClick={() => {
                    setIsOverlayShown(false);
                  }}
                >
                  <MapMarkerOverlay
                    postId={post.postId}
                    postThumbnailPath={post.postThumbnailPath}
                    title={post.title}
                    createDate={post.createDate}
                  />
                </S.OverlayContainer>
              )}
            </MapMarker>
          ))}
        </Map>
      </S.MapContainer>
      {/* 새 글 생성 버튼 컴포넌트 */}
      <Link href="/post/write" passHref>
        {/* <a href="#!"> */}
        <S.ButtonContainer>
          <Button variant="blackOutlined" size="large">
            새 글 생성
          </Button>
        </S.ButtonContainer>
        {/* </a> */}
      </Link>
    </S.Container>
  );
}
