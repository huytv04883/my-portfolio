import PostLists from "../postLists/PostLists";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-normal text-base text-gray-500">{"What's hot"}</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <PostLists withImage={false} />
    </div>
  );
};

export default Sidebar;
