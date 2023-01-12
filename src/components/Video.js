import { parseResourceURL } from '../internals';

export default function Video({ src: _src }) {
  if (!_src) return null;

  try {
    const { src, width, height } = parseResourceURL(_src);

    return <span className="markdown-video-container">
      <iframe className="markdown-video" {...{ src, width, height }} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </span>;

  } catch (err) {
    return null;
  }
}