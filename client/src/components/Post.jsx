import React from "react";

const Post = () => {
  return (
    <div className=" w-96 mx-6 mb-10">
      <img
        className="w-full h-70 object-cover rounded-lg "
        src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
        alt=""
      />
      <div className="mt-4 flex flex-col items-center justify-center">
        <div>
          <span className=" mr-2 font-varela text-base/8 text-[#be9656]">
            Music
          </span>

          <span className=" mr-2 font-varela text-base/8 text-[#be9656]">
            Life
          </span>
        </div>
        <span className="font-josefin font-bold mt-4  text-2xl">
          Lorem ipsum dolor sit amet{" "}
        </span>
        <hr />
        <span className="text-[#999] italic font-lora text-sm mt-4">
          1 hour ago
        </span>
        <div>
          <p className="font-varela text-base/6 text-[#444] mt-4 text-ellipsis line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel eum a mollitia accusamus, natus laboriosam? Itaque
            doloribus natus incidunt commodi hic qui officiis deserunt, dolorum,
            explicabo quae minima odio?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Minus, molestias nihil sunt tenetur, quibusdam,
            autem nesciunt libero cum amet in accusantium? Id harum rem animi
            fuga cupiditate dolore ad ipsa! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aliquam eos maxime numquam natus
            nesciunt, odio tempora omnis animi eaque id voluptatibus architecto
            beatae nobis, soluta dolorum dicta adipisci ducimus inventore. Quae,
            repellat! Cupiditate suscipit sit facere impedit provident expedita
            quo ut perferendis error, et eos fuga deserunt culpa. Voluptatum
            illum minima reprehenderit incidunt laudantium assumenda itaque
            fugit alias quia facere?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
