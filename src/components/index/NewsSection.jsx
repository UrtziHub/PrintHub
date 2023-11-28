// NewsSection.js
import NewsItem from './NewsItem';
import video2 from '../../assets/video.mp4'; // Replace with the correct path
const newsData = [
    {
        color: '#FFE9E9',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M10.25 4.75L7.75 19.25" stroke="currentColor" ></path><path d="M16.25 4.75L13.75 19.25" stroke="currentColor" ></path><path d="M19.25 8.75H5.75" stroke="currentColor" ></path><path d="M18.25 15.25H4.75" stroke="currentColor" ></path></svg>,
        title: 'Oversee your operations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.',
    },
    {
        color: '#EFE9FF',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M6.25 8.75H5.75C5.19772 8.75 4.75 9.19772 4.75 9.75V15.25C4.75 15.8023 5.19772 16.25 5.75 16.25H6.25C6.80228 16.25 7.25 15.8023 7.25 15.25V9.75C7.25 9.19772 6.80228 8.75 6.25 8.75Z" stroke="currentColor" ></path><path d="M12.25 4.75H11.75C11.1977 4.75 10.75 5.19772 10.75 5.75V15.25C10.75 15.8023 11.1977 16.25 11.75 16.25H12.25C12.8023 16.25 13.25 15.8023 13.25 15.25V5.75C13.25 5.19772 12.8023 4.75 12.25 4.75Z" stroke="currentColor"></path><path d="M4.75 19.25H19.25" stroke="currentColor" ></path><path d="M18.25 8.75H17.75C17.1977 8.75 16.75 9.19772 16.75 9.75V15.25C16.75 15.8023 17.1977 16.25 17.75 16.25H18.25C18.8023 16.25 19.25 15.8023 19.25 15.25V9.75C19.25 9.19772 18.8023 8.75 18.25 8.75Z" stroke="currentColor" ></path></svg>,
        title: 'Fulfill every order',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.',
    },
    {
        color: '#E9F4FF',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M10.25 4.75L7.75 19.25" stroke="currentColor" ></path><path d="M16.25 4.75L13.75 19.25" stroke="currentColor" ></path><path d="M19.25 8.75H5.75" stroke="currentColor" ></path><path d="M18.25 15.25H4.75" stroke="currentColor" ></path></svg>,
        title: 'Manage your money where you make it',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.',
    },
];

const NewsSection = () => (
    <section className="pt-5 mx-2 md:mx-32 xl:mx-72 text-blue-950 flex flex-col">

        {/* Encabezado */}
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl font-bold">Our community news</h1>
            <a className="text-lg border-b border-blue-950 hidden lg:block " href="#">
                See more news
            </a>
        </div>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Video */}
            <video src={video2} autoPlay={true} muted={true} loop={true} className="m-10 flex-1 shadow rounded w-full h-full transition ease-in-out"></video>

            {/* Lista de noticias */}
            <div className="flex-1 m-4 flex flex-col lg:gap-4 lg:items-start cursor-pointer">
                {newsData.map((news, index) => (
                    <NewsItem key={index} {...news} />
                ))}

            </div>
        </div>

    </section>
);

export default NewsSection;