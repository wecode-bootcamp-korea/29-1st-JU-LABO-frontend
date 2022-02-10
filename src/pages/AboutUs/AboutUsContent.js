import React from 'react';

const AboutUsContent = ({ name, selectedName }) => {
  const PROFILE_IMAGES = {
    namju: 'https://ca.slack-edge.com/TH0U6FBTN-U02MC4LEMU4-be5c9baf2b08-512',
    jeongdo: 'https://ca.slack-edge.com/TH0U6FBTN-U02M6TUD7QD-9dda35f43088-512',
    chungkyu:
      'https://ca.slack-edge.com/TH0U6FBTN-U02M9TDL1HR-dd480d4249d9-512',
    hyungtaek:
      'https://ca.slack-edge.com/TH0U6FBTN-U02M6TU11LM-922d1655d29a-512',
    jiyeon: 'https://ca.slack-edge.com/TH0U6FBTN-U02REJ4S1S9-7c1b8068516e-512',
    changhyun:
      'https://ca.slack-edge.com/TH0U6FBTN-U02M9TE01PD-76dbb65c2559-512',
  };

  const COMMENTS = {
    namju:
      '첫 프로젝트를 여러분들과 함께 할 수 있어서 영광이었습니다... 잘 수고하셨고 고마워요 여러분.... 힘들기도 했지만, 재미있기도 했었어요. 그건 다 여러분들과 함께여서 그렇습니다. <br /> 회식을 못가서 정말 죄송하고... 또 만나요',
    jeongdo:
      '주라보팀 모두 고생 많으셨습니다! 멋진 팀원분들과 함께여서 프로젝트 정말 재미있게 한 것 같아요! 2차 프로젝트도 화이팅입니다~~~!',
    chungkyu: `R : eunion 하고싶은팀이에요
      E : nergy가 부족한 저에게 힘을 북돋아줬어요
      F : ull stack 개발자까지 화이팅
      U : guys 다음프로젝트 때도
      N : o problem 하시고
      D : oing great 하세요`,
    hyungtaek:
      '첫 프로젝트인만큼  실수도많고 알아가야할것이 많았습니다. 팀원들과어떻게 소통해야하는지 조금이나마 배운시간들이었고 전체적으로 아쉬운점이많았습니다 다음주에는 보완해서 임하겠습니다',
    jiyeon: '',
    changhyun:
      '마음을 불태워라. 한계를 뛰어넘어! - 렌고쿠 쿄주로 (1995 ~ 2999)',
  };

  return (
    <div
      className={selectedName === name ? 'memberStory active' : 'memberStory'}
    >
      <img alt={name} src={PROFILE_IMAGES[name]} />
      <p>{COMMENTS[name]}</p>
    </div>
  );
};

export default AboutUsContent;
