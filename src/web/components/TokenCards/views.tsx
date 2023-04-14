import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  gap: 2px;
  isolation: isolate;
  width: 348.25px;
  height: 452px;
  border-radius: 10px;
  align-self: stretch;
  flex-grow: 1;
`;

export const CardWrapperInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 336.25px;
  height: 440px;
  border-radius: 5px;
  align-self: stretch;
  flex-grow: 1;
  z-index: 0;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
    transform: translateY(-6px);
    translate: 0.2s transform;
  }
`;

export const CardImage = styled.img`
  width: 336.25px;
  height: 292px;
  object-fit: cover;
  object-position: center;
`;

export const CardAssetInfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 16px 12px;
  gap: 4px;
  isolation: isolate;
  width: 336.25px;
  height: 84px;
  background: radial-gradient(
    113.75% 307.5% at 36.25% 32.5%,
    #1d1b2b 0%,
    #090719 100%
  );
`;

export const AssetID = styled.h4`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-block-start: 0px;
  margin-block-end: 0.25rem;
`;

export const CollectionName = styled.p`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  margin-block-start: 0px;
  margin-block-end: 0.25rem;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(90.19deg, #ffffff 20.16%, rgba(255, 255, 255, 0) 92.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  opacity: 0.5;
`;

export const TransactionBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  left: 14px;
  bottom: 30%;
  width: 90px;
  height: 28px;
  background: radial-gradient(
      102.5% 1778.81% at 102.93% 143.75%,
      #000000 0%,
      #31b3b3 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 0px 20.4345px rgba(61, 241, 165, 0.35),
    inset 0px 0px 25.5431px rgba(67, 197, 119, 0.6);
  border-radius: 8px;
  z-index: 2;
`;

export const TransactionBadgeText = styled.span`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.1px;
  color: #ffffff;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

export const OwnerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  width: 336.25px;
  height: 64px;

  background: radial-gradient(
    39.62% 142.82% at 67.14% 50.58%,
    #3a3367 0%,
    #181629 100%
  );
`;

export const YatUserBadge = styled.div<{ padTwitterHandle?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 32px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  ${(props) => (props.padTwitterHandle ? 'padding-right: 6px;' : '')};
`;

export const YatBadge = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  gap: 2px;
  height: 32px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    linear-gradient(180deg, #232131 0%, #0d0b0e 100%);
  background-blend-mode: soft-light, normal;
  border-radius: 50px;
`;

export const TwitterHandle = styled.span`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1d9bf0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: right;
  margin-left: 4px;
`;

export const TimestampBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  width: 72px;
  height: 28px;
  position: absolute;
  left: 14px;
  top: 14px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18.7316px);
  border-radius: 5px;
  z-index: 3;
`;

export const TimestampLabel = styled.span`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  text-overflow: ellipsis;
`;
