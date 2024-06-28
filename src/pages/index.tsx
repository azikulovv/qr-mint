import { Block } from "konsta/react";
import type { FunctionComponent } from "react";

import { Tabbar } from "@/components/Tabbar";

export const Home: FunctionComponent = () => {
  return (
    <div>
      <Block strong inset className="space-y-4">
        <p>
          <b>Инфа о нас</b>
        </p>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium
            necessitatibus, nihil quas praesentium at quibusdam cupiditate possimus et repudiandae
            dolorum delectus quo, similique voluptatem magni explicabo adipisci magnam ratione!
          </span>
          <span>
            Quod praesentium consequatur autem veritatis, magni alias consectetur ut quo, voluptatum
            earum in repellat! Id, autem! Minus suscipit, ad possimus non voluptatem aliquam
            praesentium earum corrupti optio velit tenetur numquam?
          </span>
          <span>
            Illo id ipsa natus quidem dignissimos odio dolore veniam, accusamus vel assumenda nulla
            aliquam amet distinctio! Debitis deserunt, et, cum voluptate similique culpa assumenda
            inventore, facilis eveniet iure optio velit.
          </span>
          <span>
            Maiores minus laborum placeat harum impedit, saepe veniam iusto voluptates delectus
            omnis consectetur tenetur ex ipsa error debitis aspernatur amet et alias! Sit odit cum
            voluptas quae? Est, omnis eos?
          </span>
        </p>
      </Block>

      <Tabbar />
    </div>
  );
};
