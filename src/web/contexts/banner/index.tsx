import React, {
  memo,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

const FixedBannerBar = styled.div`
  position: absolute;
  top: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

const Banner = styled.div<{ background: string }>`
  height: 50px;
  width: 800px;
  border-radius: 4px;
  background: ${(props) => props.background};
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: #ffffff;
  padding: 12px;
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type BannerProps = { bannerText: string; background: string; id: string };
type BannerConfig = BannerProps;

export type BannerContextType = {
  dispatchBanner(config: BannerConfig): void;
};

const BannerContext = createContext<BannerContextType>({
  dispatchBanner(config) {
    /** eslint-disable no-empty-function */
  },
});

export const useBannerCtx = () => useContext(BannerContext);

export const MemoizedBannerContextProvider = memo(function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [banners, setBanners] = useState<BannerConfig[]>([]);

  function autocloseBanner(bannerId: string) {
    if (banners.find((bannerIterConfig) => bannerIterConfig.id === bannerId)) {
      setBanners((existingBanners) =>
        existingBanners.filter((banner) => banner.id !== bannerId)
      );
    }
  }

  useEffect(() => {
    if (banners.length > 0) {
      setTimeout(() => autocloseBanner(banners[banners.length - 1].id), 5000);
    }
  }, [banners]);

  function dispatchBanner(bannerConfig: BannerConfig) {
    const { id } = bannerConfig;
    const bannerExists = banners.find(
      (bannerIterConfig) => bannerIterConfig.id === id
    );
    if (bannerExists) return;
    setBanners((existingBanners) => [...existingBanners, bannerConfig]);
  }

  return (
    <BannerContext.Provider value={{ dispatchBanner }}>
      <FixedBannerBar>
        {banners.map((bannerConfig) => (
          <Banner background={bannerConfig.background} key={bannerConfig.id}>
            {bannerConfig.bannerText}
          </Banner>
        ))}
      </FixedBannerBar>
      {children}
    </BannerContext.Provider>
  );
});
