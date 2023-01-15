import { NewsType } from "../../types/CourseType"
import './news.css'

interface IProps {
    news:NewsType
}

const NewsSection = ({news}:IProps) =>{
    return(
        <div className='news-element'>
            <h5>{news.date}</h5>
            <a href={news.link}>{news.newsText}</a>
        </div>
    )
}

export default NewsSection