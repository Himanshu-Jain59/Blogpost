import React from "react";

const Singlepost = () => {
  return (
    <div className="flex-9/12 ml-5">
      <div className="p-5 pr-0 ">
        <img
          className="w-auto h-auto rounded-xl object-cover"
          src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
          alt=""
        />
        <h1 className="text-center m-2.5 font-lora text-3xl font-semibold">
          Lorem ipsum dolor sit amet.
          <div className="mt-2 flex items-center float-right text-xl gap-5 ">
            <i
              className="fa-solid fa-pen-to-square"
              style={{ color: "#74c0fc" }}
            ></i>
            <i className="fa-solid fa-trash" style={{ color: "#f53d3d" }}></i>
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-base text-[#b39656] font-varela">
          <span>
            Author: <b>Name</b>
          </span>
          <span>1 hour ago</span>
        </div>
        <p className="text-[#666] text-justify font-lora text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          numquam labore in facere maiores fugit distinctio consequatur, qui
          ipsa corporis quisquam eligendi voluptatibus eveniet repellat incidunt
          voluptatem voluptas officiis iusto. Rerum quas dolorum, veritatis
          quisquam qui similique excepturi sunt voluptate accusamus voluptas ad
          velit. Ad perferendis totam placeat ducimus quod, modi reprehenderit
          rem asperiores minima dolorem repellat quos eaque? Voluptatem. Quidem
          ad velit exercitationem iure voluptatem, ab, ipsa deserunt dicta
          libero ex fuga quis modi consequatur similique explicabo itaque harum
          eos sequi aliquam iste quam placeat assumenda non esse? Eveniet!
          Minima officia ut iure, fugiat dolorum asperiores nostrum molestias
          aliquam sunt facere at culpa quos labore quam esse debitis assumenda
          recusandae inventore! Pariatur perspiciatis doloremque repudiandae,
          aspernatur totam voluptates adipisci. Ratione incidunt, excepturi esse
          repellendus id nisi exercitationem aut corporis quas, sit veritatis.
          Sunt, commodi. Sunt, ipsam. Quod consequuntur quos sapiente magnam
          vitae? Voluptatem, facilis. Voluptate eveniet porro eligendi harum!
          Debitis voluptates magni asperiores suscipit totam culpa, doloribus
          excepturi ex, voluptatum commodi repellendus necessitatibus facilis
          deserunt, earum voluptas. Facilis earum corrupti possimus aut
          quibusdam nam eligendi praesentium quo corporis officiis? Obcaecati
          corporis doloremque, nihil quasi odit maiores voluptatibus dolor
          excepturi corrupti earum. Magnam deserunt minima beatae. Impedit iste
          aperiam, sunt, voluptatem magnam quaerat non itaque error ab, tempore
          sit aspernatur? Omnis numquam optio sunt accusantium placeat officia
          neque provident vero quidem a fugit nam soluta accusamus tenetur,
          dolorem in dicta consectetur suscipit repellendus quia excepturi!
          Minima mollitia unde id laudantium.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
