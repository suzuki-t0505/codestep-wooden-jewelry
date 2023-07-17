import work from '../../../public/work.jpg';
import { MainContent } from "./MainContent";
import { MainContentImage } from './MainContentImage';
import { MainContentText } from './MainContentText';
import { MainContentTextarea } from './MainContentTextarea';
import { MainContentTitle } from './MainContentTitle';

export const Work = (props) => {
  return (
    <MainContent {...props} addClass='flex-row-reverse'>
      <MainContentImage src={work} alt='work image' />
      <MainContentTextarea>
        <MainContentTitle>私たちの考えるジュエリーとは</MainContentTitle>
        <MainContentText addClass='mb-6'>Work</MainContentText>
        <MainContentText>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </MainContentText>
      </MainContentTextarea>
    </MainContent>
  )
}