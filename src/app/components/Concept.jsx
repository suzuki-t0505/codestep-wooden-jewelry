import concept from '../../../public/concept.jpg';
import { MainContent } from "./MainContent";
import { MainContentImage } from './MainContentImage';
import { MainContentText } from './MainContentText';
import { MainContentTextarea } from './MainContentTextarea';
import { MainContentTitle } from './MainContentTitle';

export const Concept = (props) => {
  return (
    <MainContent {...props}>
      <MainContentImage src={concept} alt='concept image' />
      <MainContentTextarea>
        <MainContentTitle>私たちの考えるジュエリーとは</MainContentTitle>
        <MainContentText addClass='mb-6'>Concept</MainContentText>
        <MainContentText>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </MainContentText>
      </MainContentTextarea>
    </MainContent>
  )
}