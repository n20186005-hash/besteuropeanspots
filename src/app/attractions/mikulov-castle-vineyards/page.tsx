import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米库洛夫城堡及葡萄园 Mikulov｜悬崖上的玫瑰色城堡与千年酒香 - 最佳欧洲景点',
  description: '嘿，想象一下，你驾车穿行在南摩拉维亚那起起伏伏、温柔如波浪的丘陵之间，两旁的风景是整齐到令人心醉的葡萄藤列队。就在你觉得这片绿意快要将你淹没时，一个拐弯，它猝不及防地撞进你的视线——一座巨大的、泛着温暖玫瑰粉与鹅黄色的城堡，不是建在山坡上，而是像从地心生长出来一样，牢牢“钉”在一整块光秃秃的、暗沉沉...',
}

export default function MikulovCastleVineyardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '米库洛夫城堡及葡萄园', href: '/attractions/mikulov-castle-vineyards' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米库洛夫城堡及葡萄园・Mikulov・捷克・南摩拉维亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，想象一下，你驾车穿行在南摩拉维亚那起起伏伏、温柔如波浪的丘陵之间，两旁的风景是整齐到令人心醉的葡萄藤列队。就在你觉得这片绿意快要将你淹没时，一个拐弯，它猝不及防地撞进你的视线——一座巨大的、泛着温暖玫瑰粉与鹅黄色的城堡，不是建在山坡上，而是像从地心生长出来一样，牢牢“钉”在一整块光秃秃的、暗沉沉的火山岩巨岩顶端。那一刻的视觉冲击，像一声悠长而满足的叹息。风从敞开的车窗灌进来，带着葡萄叶青涩的香气和远处成熟浆果若有似无的甜，你脚下的油门不自觉地松了。
把车停在老城色彩柔和的小广场，开始顺着指示牌往山上走。石板路很快变成了碎石子小径，两旁是当地人的民居，窗户台上摆满了天竺葵。你能听见捷克语模糊的谈笑声从院子里飘出来，混合着煎肉肠的香味。这里不像那些被游客挤爆的景点，它活生生地嵌在当地人的生活里。老人们坐在长椅上晒太阳，看着你这位陌生的徒步者，会微笑着点头说一声“Dobrý den”（日安）。越往上走，城堡那庞大的身躯带来的压迫感越强，但那种压迫感是亲切的，仿佛一个沉默而温和的巨人，守护着脚下的小镇和万亩葡萄田。
当你终于穿过拱门，站在城堡前方的砾石广场上时，最打动人的那一刻才真正到来。转过身，背对城堡雄伟的立面，眼前豁然开朗。整个米库洛夫盆地像一幅被精心熨烫过的绿色天鹅绒毯子，在你脚下无边无际地铺展开来。一排排葡萄藤勾勒出大地的曲线，其间点缀着童话般的小村庄和哥特式教堂的尖顶。阳光透过云层，在田野上投下明明暗暗的光斑，风过处，仿佛能听到整片土地在呼吸、在低语、在酝酿着秋天的甜蜜。你会忽然明白，这里真正的核心魅力，从来不止是那座精美的城堡，而是这种“居高临下”的、与土地紧紧相连的视野和胸怀。城堡是王冠，而葡萄园，是它赖以生存的、丰饶的身体。
空气里飘荡着一种复杂的味道：古老石墙被晒热后散发的尘土气，远处森林送来的松脂清香，还有从山脚下某个开放酒窖里隐隐飘来的、橡木桶和新鲜酒液的芬芳。偶尔传来几声乌鸦的鸣叫，在悬崖间回荡，更衬得四周空旷宁静。在这里，时间好像被葡萄酒浸泡过一样，流淌得缓慢而醇厚。你不想匆匆忙忙地进去参观那些房间和展品，只想先在这里站上一会儿，让眼睛饱餐这片风景，让肺腑装满这自由的空气，让自己彻底融入这幅已经存在了数百年的、关于丰饶与守护的画卷里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，想象一下，你驾车穿行在南摩拉维亚那起起伏伏、温柔如波浪的丘陵之间，两旁的风景是整齐到令人心醉的葡萄藤列队。就在你觉得这片绿意快要将你淹没时，一个拐弯，它猝不及防地撞进你的视线——一座巨大的、泛着温暖玫瑰粉与鹅黄色的城堡，不是建在山坡上，而是像从地心生长出来一样，牢牢“钉”在一整块光秃秃的、暗沉沉的火山岩巨岩顶端。那一刻的视觉冲击，像一声悠长而满足的叹息。风从敞开的车窗灌进来，带着葡萄叶青涩的香气和远处成熟浆果若有似无的甜，你脚下的油门不自觉地松了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在老城色彩柔和的小广场，开始顺着指示牌往山上走。石板路很快变成了碎石子小径，两旁是当地人的民居，窗户台上摆满了天竺葵。你能听见捷克语模糊的谈笑声从院子里飘出来，混合着煎肉肠的香味。这里不像那些被游客挤爆的景点，它活生生地嵌在当地人的生活里。老人们坐在长椅上晒太阳，看着你这位陌生的徒步者，会微笑着点头说一声“Dobrý den”（日安）。越往上走，城堡那庞大的身躯带来的压迫感越强，但那种压迫感是亲切的，仿佛一个沉默而温和的巨人，守护着脚下的小镇和万亩葡萄田。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过拱门，站在城堡前方的砾石广场上时，最打动人的那一刻才真正到来。转过身，背对城堡雄伟的立面，眼前豁然开朗。整个米库洛夫盆地像一幅被精心熨烫过的绿色天鹅绒毯子，在你脚下无边无际地铺展开来。一排排葡萄藤勾勒出大地的曲线，其间点缀着童话般的小村庄和哥特式教堂的尖顶。阳光透过云层，在田野上投下明明暗暗的光斑，风过处，仿佛能听到整片土地在呼吸、在低语、在酝酿着秋天的甜蜜。你会忽然明白，这里真正的核心魅力，从来不止是那座精美的城堡，而是这种“居高临下”的、与土地紧紧相连的视野和胸怀。城堡是王冠，而葡萄园，是它赖以生存的、丰饶的身体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里飘荡着一种复杂的味道：古老石墙被晒热后散发的尘土气，远处森林送来的松脂清香，还有从山脚下某个开放酒窖里隐隐飘来的、橡木桶和新鲜酒液的芬芳。偶尔传来几声乌鸦的鸣叫，在悬崖间回荡，更衬得四周空旷宁静。在这里，时间好像被葡萄酒浸泡过一样，流淌得缓慢而醇厚。你不想匆匆忙忙地进去参观那些房间和展品，只想先在这里站上一会儿，让眼睛饱餐这片风景，让肺腑装满这自由的空气，让自己彻底融入这幅已经存在了数百年的、关于丰饶与守护的画卷里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米库洛夫城堡及葡萄园`} />
                <InfoRow label="英文名称" value={`Mikulov`} />
                <InfoRow label="正式名称" value={`Mikulov Castle and Vineyards`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`南摩拉维亚的酒文化圣殿与千年历史的见证者，其命运与葡萄酒的兴衰紧紧缠绕。`} />
                <InfoRow label="建筑特色" value={`一座玫瑰色的文艺复兴城堡雄踞于独特的火山岩悬崖之上，俯瞰着脚下如同绿色海洋般无边无际的葡萄园。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为基调，融合了巴洛克式的内部装饰与浪漫主义时期修复的痕迹。`} />
                <InfoRow label="文化价值" value={`这里是捷克葡萄酒的灵魂所在，不仅是贵族生活的缩影，更是连接土地、人民与欢庆的民俗文化中心。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及博物馆开放时间：四月至十月，每日上午9:00至下午17:00，最晚入场时间为16:30；十一月至次年三月，城堡内部仅周末及节假日开放，时间为上午10:00至下午15:00，且部分区域关闭。城堡山丘花园及外围区域全年24小时开放。请注意，每年一月通常有为期两周的全面闭馆维护期，具体日期每年不同，建议出行前官网确认。重大节日如圣诞节及复活节开放时间会有临时调整。`} />
              <InfoRow label="门票价格" value={`城堡主体（含历史博物馆常设展）全票：180捷克克朗；优惠票（学生、65岁以上老人、残疾人）：120捷克克朗；家庭票（2大3小）：450捷克克朗。仅参观城堡花园及观景平台免费。另有季节性导览游（如地窖酒窖游、塔楼攀登）需额外购票，价格在80-150克朗不等。购票推荐选择“城堡通票”，可参观所有开放区域及一个临时特展。`} />
              <InfoRow label="地址" value={`Zámek 1, 692 01 Mikulov, Czechia`} />
              <InfoRow label="交通方式" value={`从最近的国际机场布尔诺（Brno-Turany Airport, BRQ）出发，驾车沿D52高速公路向南行驶约50分钟即可直达米库洛夫镇中心，停车场在山脚下。若乘坐公共交通，可从布尔诺中央火车站（Brno hl.n.）搭乘区域火车（Os）或巴士，方向为“Břeclav”或“Mikulov”，火车约需1小时15分钟，班次每小时1-2班；巴士约需1小时，班次略少。抵达米库洛夫火车站或巴士站后，步行上山约15-20分钟即可抵达城堡大门。购票建议使用捷克铁路（ČD）APP提前查询时刻表，现场在车站自动售票机或售票窗口购票即可，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起米库洛夫的故事，你得先忘掉那些金碧辉煌的王室传奇，它的开篇更像一部粗粝的边境守卫日记。早在13世纪，波西米亚的国王们就看中了这座突兀的火山岩山丘，它的战略位置太重要了，正好卡在连接维也纳和布拉格的古老商道上，还能俯瞰摩拉维亚广袤的南部平原。于是，一座简朴但坚固的罗马式城堡在这里拔地而起，它的任务很简单：驻军、收税、保卫边疆。那时候，山脚下可能已经有零星的葡萄藤，但酒，更多是士兵们用来驱寒和壮胆的日常饮品，与后来的风雅还沾不上边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`改变它命运的第一个家族，是势力遍布中欧的列支敦士登家族。他们在16世纪获得了这片领地，并将那座防御工事初步改造成了更适合居住的文艺复兴式宅邸。但真正给米库洛夫注入灵魂、并把它推向黄金时代的，是迪特里希施泰因家族。这个来自奥地利的显赫家族在1575年入主，从此，城堡和这片土地紧密相连了近三百年。他们不只是统治者，更像是雄心勃勃的建筑师和品味卓绝的文化赞助人。17世纪一场大火几乎将城堡烧成白地，但迪特里希施泰因家族不惜重金，邀请当时最好的意大利建筑师和艺术家，在废墟上重建起我们今天看到的这座宏伟的玫瑰色宫殿。巴洛克式的内部装饰极尽奢华，巨大的图书馆收藏了数万册珍本，城堡成为了整个南摩拉维亚地区的文化和政治中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，比建筑更深远的影响，是迪特里希施泰因家族对这片土地“天赋”的认知与开发。他们敏锐地意识到，这里的日照、土壤和坡地，是上天赐予的种植葡萄的绝佳礼物。家族中的几代主人都醉心于葡萄栽培和酿酒技术，他们从法国、德国引进更优质的葡萄品种，系统性地规划葡萄园，修建庞大的酒窖网络，并将科学的酿酒方法推广开来。城堡下方那深达数层、迷宫般的酒窖，就是那个时代的工程奇迹，里面常年恒温恒湿，存放着数以千计的巨大橡木桶。米库洛夫逐渐不再是边境要塞，而变成了一个繁荣的葡萄酒王国的心脏。每年秋天的收获节，城堡里都会举行盛大的庆典，空气里弥漫着新酒的香气和欢快的民歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的车轮隆隆向前，总有颠簸。二战末期，撤退的德军在城堡内点燃了一场灾难性的大火，数百年的艺术收藏、华丽的内部装饰几乎毁于一旦，只剩下被熏黑的外墙骨架，凄然矗立在悬崖上，像一个被遗弃的巨人。战后，城堡被收归国有，在很长一段时间里，它都是一副破败、荒凉的模样，昔日的酒香被灰尘和遗忘取代。转机发生在20世纪后半叶，捷克政府开始意识到这座城堡及其所代表的葡萄酒文化遗产的无价。一场漫长而精细的修复工程展开了，工匠们参照古老的设计图和残存的碎片，一点点让玫瑰色的外墙重现光彩，小心翼翼地复原着大厅里的壁画和石膏花饰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步在修复一新的城堡房间里，看着那些展示当地地质、考古和葡萄酒历史的展品时，你看到的不仅仅是一座建筑的复兴，更是一种生活方式的回归与致敬。城堡重新成为了社区的中心，它举办葡萄酒品鉴会、古典音乐会、历史重现市集。地窖里再次飘出醉人的酒香，只不过这次，品尝它的是来自世界各地的旅人。从防御要塞，到贵族宫殿，再到葡萄酒圣殿，历经火与战争的洗礼，米库洛夫城堡最终在它所热爱的葡萄藤的怀抱中，找到了最宁静、也最永恒的归宿。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要最完美地体验米库洛夫，强烈建议安排一整天时间，并选择在晴朗的上午早些抵达。这样的安排能让你避开午后可能出现的旅游小团队，独自享受城堡山清晨的静谧与柔和光线。整体的节奏应该是“由外向内，由大到小”——先花足够的时间沉浸在山丘、花园和俯瞰全景的震撼中，让身心充分感受这里的空间与自然；然后再进入城堡内部，细细品味历史的细节。整个深度游览过程大约需要4到6小时，包括轻松的步行、长时间的驻足观赏和一顿悠闲的午餐。请务必穿上最舒适耐走的鞋子，因为上下山和穿梭于葡萄园小径才是这里游览的精髓所在。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周一通常是捷克很多博物馆的闭馆日，虽然城堡花园开放，但内部展览不开放，务必提前查好日期。山上的小路在雨后可能有些湿滑，行走时需稍加注意。小镇上的餐厅和酒窖关门时间较早（通常晚上9点前），建议提前规划用餐，不要错过品尝当地琼瑶浆（Gewürztraminer）白葡萄酒的机会。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城中心广场出发，沿着“Zámek”路标的缓坡向上，穿过开满鲜花、充满生活气息的宁静居民区，慢慢接近那座巍峨的玫瑰色身影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进入城堡大门，先绕到城堡东侧被精心打理的法式花园，在修剪成几何形状的黄杨树丛间穿行，从侧面欣赏城堡与背后悬崖融为一体的雄姿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从花园的小径登上城堡背后的圣山（Svatý kopeček），这是一座遍布葡萄藤的小山丘，在这里你能获得与城堡平视甚至略高的视角，拍下它屹立于城镇之上的经典画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主入口购票进入城堡庭院，感受被高大文艺复兴立面环抱的肃穆感，留意庭院地面那些被岁月磨光的古老铺路石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点参观城堡内的“葡萄酒博物馆”，这里用丰富的展品和互动装置，讲述着南摩拉维亚长达千年的葡萄酒种植史，空气里仿佛都浸透着酒香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌探索城堡那幽深而凉爽的古老地窖，想象数百年前这里堆满橡木桶的景象，部分区域仍用于存放当地酒农的佳酿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀爬城堡主塔楼的狭窄旋梯，当你气喘吁吁地到达顶端时，360度无死角的绝美全景将是给你的最佳奖赏，万亩葡萄园如绿色海洋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的观景平台缓步下山，选择一条直接通往山下葡萄田的小径，近距离触摸那些饱满的葡萄串，最终回到小镇，找一家酒窖餐厅享用晚餐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山下葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，从城堡南侧下方任意一片葡萄园中回头仰望，将蜿蜒的藤蔓作为前景，能拍出城堡雄踞于苍翠山岩之上的最具层次感和生命力的全景照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡花园拱门剪影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入法式花园，站在某一处石拱门或树篱缺口处，以人为剪影，框住远处完整的城堡主体，营造出充满故事感的戏剧性画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼顶俯瞰环形全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，不要只拍风景，将相机贴近古老的石质雉堞，以斑驳的石块作为前景框架，拍摄脚下如拼图般色彩斑斓的葡萄园、红色屋顶小镇和远方森林构成的环形全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古老酒窖的光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`参观地窖时，利用手机或相机的夜景模式，捕捉从狭窄通风孔道射入的几束耶稣光，照亮空气中浮动的微尘和巨大的橡木桶，拍出充满神秘感和历史厚重感的室内大片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西侧观景平台的长椅与夕阳`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，坐在西侧平台的长椅上，以你的侧影或一杯葡萄酒作为前景，拍摄夕阳将天空染成金黄与粉紫，并柔和地照亮整片葡萄园山谷的温柔时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`早晚的“黄金时刻”和“蓝色时刻”光线最为柔和，能极大提升城堡石材的质感和葡萄园的层次感。拍摄葡萄园时，使用偏振镜可以有效消除叶片反光，让绿色更加饱和浓郁。请注意，城堡内部博物馆区域通常禁止使用闪光灯和三脚架（除非获得特殊许可），以保护珍贵的展品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻城堡山脚下由古老贵族宅邸改造的精品酒店“Hotel Galant”，石墙、拱顶和复古家具让你仿佛成为迪特里希施泰因家族的客人，早晨在爬满藤蔓的庭院里享用早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感田园诗`}</h4>
                  <p className="text-sm text-green-800">{`选择镇外几公里处一座由现代建筑师设计的“Vinařství Sedlisko”酒庄民宿，房间极简开阔，拥有直面自家葡萄园的落地窗，每晚都能伴着酒香入眠，真正住在风景里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城中心广场旁的家庭式 Pension，主人常是热情的当地酒农，不仅能提供最地道的住宿建议，还经常邀请客人品尝自家酒窖的私藏，收获意外惊喜。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端酒庄隐居`}</h4>
                  <p className="text-sm text-purple-800">{`预订附近帕夫洛夫（Pavlov）村庄山顶的顶级酒庄酒店“Hotel Rozmarín”，它拥有无边泳池和全景露台，仿佛悬浮在葡萄园海洋之上，提供米其林级别的餐饮和独家酒庄游览。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`米库洛夫在夏季（7-8月）和九月葡萄收获季时非常受欢迎，住宿务必提前数月预订。如果追求绝对宁静，建议选择镇外酒庄区的住宿，但需有自驾车。老城内的住宿虽然方便，但周末夜晚广场周围的酒吧可能有些喧闹，选择房间时请留意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米库洛夫好些天了，但闭上眼，那片无垠的、起伏的绿，和那座从绿海中升起的玫瑰色城堡，依然清晰得仿佛触手可及。这个地方教给我的，远不止于建筑的美或历史的厚。它用一种最直观、最磅礴的方式，诠释了什么是“风土”，什么是人与土地之间那种血脉相连、互相成就的关系。城堡不是孤零零的纪念碑，葡萄园也不是单纯的农作物；它们是同一个生命体的两个面：一面是人类智慧、艺术与权力的凝结，另一面是大自然的馈赠、季节的轮回与农民的汗水。站在塔楼上，看着夕阳为这幅巨画镀上金边，你会感到一种深深的平静。这种平静，来源于看到了一种完整而可持续的循环——文化因物产而繁荣，物产因文化的珍视而更具灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、即时、虚拟化的时代，米库洛夫固执地、骄傲地展示着一种“慢”的、扎根于土壤的价值。它提醒我们，有些美好的事物，需要数百年的耐心等待（无论是建筑的累积，还是一棵葡萄藤的成熟），需要一代代人的守护与传承。每一位热爱深度游的旅人，都应该来这里感受一下。不是为了拍一张打卡照，而是为了让自己置身于那个宏大的空间与时间尺度里，重新思考我们来自哪里，又将归于何处。喝一杯从脚下这片土地生长、酿造的葡萄酒，让那复杂而醇厚的香气在口中化开，你会明白，这趟旅程品尝到的，不仅是酒，更是一方水土的灵魂，和一段在时光中愈发醇香的人类故事。这，才是旅行最珍贵的收获。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/telc-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔奇广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Square</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holasovice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍拉肖维采古罗马村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holašovice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/znojmo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
