interface Props {
  voteCount: number;
}

const Vote = ({ voteCount }: Props) => {
  return (
    <div>
      <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6l4-4 4 4'
          stroke='#4661E6'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </svg>
      {voteCount}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        adipisci placeat hic distinctio qui quam ducimus magnam, nam, modi
        molestiae accusamus mollitia repellat odit cupiditate rem nihil velit
        molestias fuga beatae ipsa dolores sapiente sequi aliquid maiores!
        Dolore quibusdam suscipit error debitis ratione saepe? Dolorem quidem,
        accusamus illum perspiciatis optio natus autem minus explicabo? Culpa,
        a, optio iste eaque excepturi corrupti commodi temporibus quisquam
        dolorum maiores perspiciatis consectetur autem voluptates dolore quo
        nihil, voluptatibus illum. Dolore, voluptas! Dolor maiores a
        consequuntur aliquid quaerat sit vitae quibusdam voluptatem sequi natus
        cum tenetur quo incidunt alias, quam fugit non nesciunt. Possimus
        quaerat provident, quisquam dolore ipsa nostrum nobis iure sint,
        adipisci velit fugit nihil, maiores magnam illum quis. Ut sunt nobis
        vitae fugiat! Necessitatibus laborum error soluta magni hic impedit
        provident voluptas neque culpa sequi quasi ipsam esse sed quaerat
        quibusdam distinctio enim dicta, voluptatem amet ad iste aut. Cum
        similique error quia dolorum assumenda fugit facilis repellat, molestias
        voluptatum, temporibus, quam eaque earum aperiam autem natus? Aliquid ad
        totam distinctio quasi, ipsum, dolore qui dolorum repellendus repellat
        dignissimos officiis sunt aliquam accusamus libero neque laudantium iste
        quibusdam consectetur sapiente rem blanditiis obcaecati! Omnis molestiae
        perferendis reprehenderit molestias aperiam? Temporibus consectetur
        veniam pariatur similique suscipit iste quisquam explicabo
        exercitationem, nulla neque, laborum quod at. Quas qui quis corrupti
        quae, adipisci omnis ipsum reiciendis doloremque sunt ab beatae earum.
        Laborum, eum? Quis tenetur maiores fugiat, eligendi autem at itaque
        rerum assumenda quasi veniam maxime nisi, fugit perferendis distinctio
        laboriosam placeat. Neque debitis magni labore perspiciatis ex
        temporibus corrupti perferendis incidunt sint et quod quaerat itaque
        ipsam dolore porro explicabo ratione nihil minus laudantium, mollitia
        deleniti! Ullam deleniti explicabo laudantium reprehenderit minus quam
        suscipit voluptatum in, id recusandae vero, sapiente non saepe incidunt
        eveniet asperiores mollitia magni totam? Ducimus dignissimos repellat
        eaque nemo magni?
      </p>
    </div>
  );
};

export default Vote;
