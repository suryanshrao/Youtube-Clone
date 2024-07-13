export function VideoCard(props: any) {
  return (
    <div className="p-2">
      <img src={props.image} 
      className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 pt-1 pl-2">
          <img
            className={"rounded-full w-19 h-19"}
            src={props.thumbnail}
          />
        </div>
        <div className="col-span-11 pl-5">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-600 text-base">{props.author}</div>
          <div className="col-span-11 text-gray-600 text-base"> {props.views} | {props.timeStamp} </div>
        </div>
      </div>
    </div>
  );
}
