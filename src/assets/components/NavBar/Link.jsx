
const Link = ({item}) => {
    return (
       <li className="px-4 lg:mr-10 hover:bg-amber-400"><a href={item.path}>{item.name}</a></li>
    );
};

export default Link;