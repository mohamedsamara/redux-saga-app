import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Gallery from '../index';

const photos = [
  {
    type: 'gif',
    id: 'htFUXJH5vjgIw',
    slug: 'big-bang-theory-tbbt-leonard-hofstadter-htFUXJH5vjgIw',
    url:
      'https://giphy.com/gifs/big-bang-theory-tbbt-leonard-hofstadter-htFUXJH5vjgIw',
    bitly_gif_url: 'https://gph.is/1L2qjzW',
    bitly_url: 'https://gph.is/1L2qjzW',
    embed_url: 'https://giphy.com/embed/htFUXJH5vjgIw',
    username: '',
    source:
      'https://dream-hacker.tumblr.com/post/83361358555/pretending-to-know-something-about-football-like',
    rating: 'g',
    content_url: '',
    source_tld: 'dream-hacker.tumblr.com',
    source_post_url:
      'https://dream-hacker.tumblr.com/post/83361358555/pretending-to-know-something-about-football-like',
    is_sticker: 0,
    import_datetime: '2015-09-22 08:35:20',
    trending_datetime: '0000-00-00 00:00:00',
    images: {
      fixed_height_still: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200_s.gif',
        width: '208',
        height: '200'
      },
      original_still: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy_s.gif',
        width: '260',
        height: '250'
      },
      fixed_width: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w.gif',
        width: '200',
        height: '192',
        size: '444469',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w.mp4',
        mp4_size: '28332',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w.webp',
        webp_size: '131266'
      },
      fixed_height_small_still: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100_s.gif',
        width: '104',
        height: '100'
      },
      fixed_height_downsampled: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200_d.gif',
        width: '208',
        height: '200',
        size: '158190',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200_d.webp',
        webp_size: '43338'
      },
      preview: {
        width: '232',
        height: '222',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-preview.mp4',
        mp4_size: '40434'
      },
      fixed_height_small: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100.gif',
        width: '104',
        height: '100',
        size: '136201',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100.mp4',
        mp4_size: '13368',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100.webp',
        webp_size: '54090'
      },
      downsized_still: {
        url:
          'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-downsized_s.gif',
        width: '260',
        height: '250',
        size: '38630'
      },
      downsized: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-downsized.gif',
        width: '260',
        height: '250',
        size: '739863'
      },
      downsized_large: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.gif',
        width: '260',
        height: '250',
        size: '739863'
      },
      fixed_width_small_still: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100w_s.gif',
        width: '100',
        height: '96'
      },
      preview_webp: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-preview.webp',
        width: '172',
        height: '165',
        size: '49740'
      },
      fixed_width_still: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w_s.gif',
        width: '200',
        height: '192'
      },
      fixed_width_small: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100w.gif',
        width: '100',
        height: '96',
        size: '127597',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100w.mp4',
        mp4_size: '12179',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/100w.webp',
        webp_size: '49512'
      },
      downsized_small: {
        width: '260',
        height: '250',
        mp4:
          'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-downsized-small.mp4',
        mp4_size: '62461'
      },
      fixed_width_downsampled: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w_d.gif',
        width: '200',
        height: '192',
        size: '147422',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200w_d.webp',
        webp_size: '41340'
      },
      downsized_medium: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.gif',
        width: '260',
        height: '250',
        size: '739863'
      },
      original: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.gif',
        width: '260',
        height: '250',
        size: '739863',
        frames: '19',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.mp4',
        mp4_size: '112120',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.webp',
        webp_size: '210620'
      },
      fixed_height: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200.gif',
        width: '208',
        height: '200',
        size: '478437',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200.mp4',
        mp4_size: '29978',
        webp: 'https://media2.giphy.com/media/htFUXJH5vjgIw/200.webp',
        webp_size: '139616'
      },
      looping: {
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-loop.mp4',
        mp4_size: '968432'
      },
      original_mp4: {
        width: '480',
        height: '460',
        mp4: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy.mp4',
        mp4_size: '112120'
      },
      preview_gif: {
        url: 'https://media2.giphy.com/media/htFUXJH5vjgIw/giphy-preview.gif',
        width: '95',
        height: '91',
        size: '48450'
      },
      '480w_still': {
        url: 'https://media0.giphy.com/media/htFUXJH5vjgIw/480w_s.jpg',
        width: '480',
        height: '462'
      }
    },
    title: 'big bang theory leonard GIF',
    _score: 2500033.8,
    analytics: {
      onload: {
        url:
          'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ca24999314a784a6b9e9583&event_type=GIF_SEARCH&gif_id=htFUXJH5vjgIw&action_type=SEEN'
      },
      onclick: {
        url:
          'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ca24999314a784a6b9e9583&event_type=GIF_SEARCH&gif_id=htFUXJH5vjgIw&action_type=CLICK'
      },
      onsent: {
        url:
          'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ca24999314a784a6b9e9583&event_type=GIF_SEARCH&gif_id=htFUXJH5vjgIw&action_type=SENT'
      }
    }
  }
];

const renderComponent = (props = {}) =>
  shallow(<Gallery {...props} photos={photos} />);

describe('<Gallery />', () => {
  it('should render an <Gallery> tag', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.exists()).toBe(true);
  });

  it('should <Gallery> render correctly', () => {
    const component = renderer.create(<Gallery photos={photos} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
