import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴勒迪克上城 Bar-le-Duc｜探访被时光封存的16世纪法国优雅石城 - 最佳欧洲景点',
  description: '如果你和我一样，对那种挤满游客、商店千篇一律的“古镇”感到些许疲惫，那么巴勒迪克的上城，会像一口清冽的默兹河水，瞬间涤荡你的感官。我的第一眼，是从一条不起眼的小巷拐进去后获得的——毫无预兆地，一整片蜂蜜色与奶油色的石头世界在斜坡上铺展开来。那不是一两栋孤立的漂亮房子，而是连绵成群、肩并肩站着的整个1',
}

export default function BarLeDucRenaissanceUpperTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '巴勒迪克（上城）', href: '/attractions/bar-le-duc-renaissance-upper-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴勒迪克（上城）・Bar-le-Duc (Upper Town)・法国・默兹省，巴勒迪克市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你和我一样，对那种挤满游客、商店千篇一律的“古镇”感到些许疲惫，那么巴勒迪克的上城，会像一口清冽的默兹河水，瞬间涤荡你的感官。我的第一眼，是从一条不起眼的小巷拐进去后获得的——毫无预兆地，一整片蜂蜜色与奶油色的石头世界在斜坡上铺展开来。那不是一两栋孤立的漂亮房子，而是连绵成群、肩并肩站着的整个16世纪。阳光打在那些被数百年风雨打磨得温润的石头上，反射出一种柔和的、蜂蜜般的光泽，空气里闻得到老石头干燥的尘土味，混合着远处某家面包店刚出炉的“巴勒迪克果酱挞”的甜香。
这里安静得能听见自己的心跳，还有鞋跟敲在古老石板路上发出的清脆回响，那声音像是叩响了历史的大门。几乎没有商业化的痕迹，只有零星几家画廊和手工作坊。我看到一位老先生在自家雕刻精美的窗台下慢悠悠地浇花，窗台上摆着一盆天竺葵；一位老太太提着草编篮子从面包店走出来，篮子里露出一截法棍。那一刻我明白了，这不是一个为游客准备的舞台布景，这就是他们生活的家园。那些布满神话人物、野兽徽章和精致花环的石雕立面，不是被圈起来保护的文物，就是他们每天进出的门脸，是生活背景的一部分。
最打动我的，是那种沉浸式的“完整感”。你仿佛走入了一个时光胶囊，文艺复兴时期的城市规划、建筑比例、甚至那种追求人文与和谐的美学气息，都被原封不动地保存了下来。没有突兀的现代建筑插队，没有喧嚣的旅游大巴。只有高高低低的阶梯街道，连接着一个个宁静的广场，每个转角都可能遇到一座装饰着 salamander（火蜥蜴，国王弗朗索瓦一世的象征）雕塑的豪宅山墙。这种宁静的、沉淀的、充满细节的优雅，才是它致命的魅力——它不是用宏大的声势震撼你，而是用无数细腻的雕花、一道巧妙的光影、一条蜿蜒的阶梯，悄悄钻进你的心里，让你想停下来，住下来，慢慢呼吸这里的空气。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你和我一样，对那种挤满游客、商店千篇一律的“古镇”感到些许疲惫，那么巴勒迪克的上城，会像一口清冽的默兹河水，瞬间涤荡你的感官。我的第一眼，是从一条不起眼的小巷拐进去后获得的——毫无预兆地，一整片蜂蜜色与奶油色的石头世界在斜坡上铺展开来。那不是一两栋孤立的漂亮房子，而是连绵成群、肩并肩站着的整个16世纪。阳光打在那些被数百年风雨打磨得温润的石头上，反射出一种柔和的、蜂蜜般的光泽，空气里闻得到老石头干燥的尘土味，混合着远处某家面包店刚出炉的“巴勒迪克果酱挞”的甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里安静得能听见自己的心跳，还有鞋跟敲在古老石板路上发出的清脆回响，那声音像是叩响了历史的大门。几乎没有商业化的痕迹，只有零星几家画廊和手工作坊。我看到一位老先生在自家雕刻精美的窗台下慢悠悠地浇花，窗台上摆着一盆天竺葵；一位老太太提着草编篮子从面包店走出来，篮子里露出一截法棍。那一刻我明白了，这不是一个为游客准备的舞台布景，这就是他们生活的家园。那些布满神话人物、野兽徽章和精致花环的石雕立面，不是被圈起来保护的文物，就是他们每天进出的门脸，是生活背景的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种沉浸式的“完整感”。你仿佛走入了一个时光胶囊，文艺复兴时期的城市规划、建筑比例、甚至那种追求人文与和谐的美学气息，都被原封不动地保存了下来。没有突兀的现代建筑插队，没有喧嚣的旅游大巴。只有高高低低的阶梯街道，连接着一个个宁静的广场，每个转角都可能遇到一座装饰着 salamander（火蜥蜴，国王弗朗索瓦一世的象征）雕塑的豪宅山墙。这种宁静的、沉淀的、充满细节的优雅，才是它致命的魅力——它不是用宏大的声势震撼你，而是用无数细腻的雕花、一道巧妙的光影、一条蜿蜒的阶梯，悄悄钻进你的心里，让你想停下来，住下来，慢慢呼吸这里的空气。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴勒迪克（上城）`} />
                <InfoRow label="英文名称" value={`Bar-le-Duc (Upper Town)`} />
                <InfoRow label="正式名称" value={`Cité Renaissance de Bar-le-Duc (Haute Ville)`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`默兹省，巴勒迪克市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`洛林公国时期最璀璨的文艺复兴瑰宝之一，被誉为“默兹河畔的佛罗伦萨”，其建筑完整性在法国北部首屈一指。`} />
                <InfoRow label="建筑特色" value={`大量采用当地金色的孔泰石，建筑立面装饰着极其繁复精美的雕刻、菱形石板、圆顶塔楼和螺旋楼梯。`} />
                <InfoRow label="建筑风格" value={`以法国文艺复兴风格为主导，完美融合了洛林本地哥特式晚期元素与来自意大利的艺术灵感。`} />
                <InfoRow label="文化价值" value={`一个完整保存了16世纪城市肌理与贵族生活美学的活化石，见证了欧洲文艺复兴思想向北方传播的关键历程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`上城街区为24小时开放公共区域。核心历史建筑如圣艾蒂安教堂开放时间通常为每日9:00-18:00。市政厅内部仅在特定导览日或工作日办公时间部分开放。游客中心开放时间为4月至10月，周一至周六 9:30-12:30 & 14:00-18:00，周日 10:00-12:30；11月至3月时间缩短，建议行前查询。部分小型博物馆有冬季闭馆期。`} />
              <InfoRow label="门票价格" value={`漫步上城街区及欣赏外部建筑完全免费。进入圣艾蒂安教堂免费。市政厅导览游通常收费约5欧元。联票（可参观当地博物馆）约8欧元。学生及18岁以下青少年享有折扣，12岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Haute Ville, 55000 Bar-le-Duc, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最为便捷。搭乘法国高铁TGV从巴黎东站至香槟-阿登TGV站，车程约45分钟。抵达后，转乘区域TER火车或提前预订的出租车前往巴勒迪克火车站，TER车程约30-40分钟，班次每小时约1-2班。从巴勒迪克火车站步行至上城核心区约15-20分钟，一路缓坡上行，穿越现代城区即可抵达古老城门。若自驾，可将车停放在城外的“Pôle Renaissance”大型免费停车场，然后步行进入，上城内部街道狭窄且多为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲巴勒迪克上城的故事，我们得把时钟拨回到那个波澜壮阔的16世纪。这里当时是洛林公国的重要城镇，而它的命运，与一位热爱艺术的公爵——勒内二世紧密相连。勒内二世在意大利战争中接触到了正在那里蓬勃发展的文艺复兴艺术，他彻底为之倾倒，决心将这种崇尚古典、赞美人文的新风吹进自己的领地。于是，他带回的不仅是战利品，更有意大利的艺术家、建筑师和崭新的美学观念。巴勒迪克，作为他青睐的居所之一，自然成了实践梦想的画布。你可以想象，当时的贵族和富商们竞相效仿，聘请能工巧匠，于是，一栋栋融合了意大利优雅比例与洛林本地工艺传统的石宅，如雨后春笋般在上城的山坡上生长起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的转折总是出人意料。到了17世纪，洛林公国在复杂的政治博弈中命运多舛。1720年，一场关键性的变故发生了：当时的公爵利奥波德做出了一个决定，将宫廷和政府机构从巴勒迪克迁往了南锡。几乎在一夜之间，这座繁华的文艺复兴之城被按下了暂停键。政治与经济中心的转移，使得上城的发展停滞了。那些精美的贵族宅邸失去了往日觥筹交错的主人，逐渐沉寂下来。从某种角度看，这是一场“灾难”；但从历史保存的角度看，这却是一次不可思议的“封存”。正因为被主流发展遗忘了，它才幸运地躲过了18、19世纪大规模的城市改造和工业化冲击，没有像许多其他城市那样，将老城区推倒重建。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它沉睡了两百多年，但灾难并未完全放过它。二十世纪的两次世界大战，尤其是第一次世界大战，默兹省是凡尔登战役的辐射区域。战火一度逼近，炮弹的震动让一些古老的玻璃窗碎裂，但奇迹般地，这片密集的石质建筑群主体结构竟从硝烟中幸存了下来。战争结束后，百废待兴，人们或许也无暇顾及这片“过时的”老城区。直到战后中叶，随着文化遗产保护意识的觉醒，人们才像发现尘封宝库一样，重新审视这片几乎被遗忘的街区。学者们惊呼这是“未被发现的杰作”，其建筑群的完整性和艺术价值，在法国同类遗产中显得弥足珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场漫长而精细的修复之旅开始了。这不是推倒重来的翻新，而是基于历史考据的“修旧如旧”。工匠们小心翼翼地清理石雕上的黑色污垢，修复破损的雕塑，加固木结构，但绝不添加多余的现代装饰。整个社区也被鼓励保留其居住功能，避免沦为纯粹的博物馆。今天的上城，每一块石头都凝结着这段跌宕的历史：从文艺复兴的辉煌诞生，到政治变迁下的意外休眠，从战争边缘的侥幸存活，到现代社会的重新珍视。它站在那里，本身就是一部沉默而厚重的石头史书，向每一个驻足的人，讲述着关于辉煌、失落、幸存与重逢的故事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受巴勒迪克的魔力，请务必安排一整天时间，并抱着散步和发现的心态。建议在上午9点左右抵达，这时阳光正好将温暖的光线投在建筑立面的雕刻上，街道安静，本地居民开始他们慢节奏的一天，是最佳的观赏和拍照时机。整体游览节奏宜慢不宜快，核心是穿梭在迷宫般的街道中，抬头欣赏每一个建筑细节，并在小广场的长椅上发发呆。路线设计为一条环形漫步道，从象征性的入口“钟楼门”开始，逐步深入核心区，参观最重要的公共建筑，最后从另一侧下山，在河边结束行程，全程步行距离不长，但包含上下坡，建议穿着舒适的鞋子。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`切忌匆匆赶路，这里的精华全在细节里，一个上午只逛两条街也比走马观花强。城内几乎没有连锁餐厅，午餐可以尝试本地小餐馆或提前从面包店购买简餐，在广场野餐。部分宅邸的私人庭院不对外开放，请尊重住户隐私，在公共街道欣赏即可。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地标性的“钟楼门”穿过，摸一摸那厚重冰凉的石壁，想象自己是16世纪进入城市的旅人`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺满鹅卵石的“大马路”缓缓上行，让你的目光流连于每一栋住宅立面上那些讲述着不同故事的雕塑与徽章`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小小的“圣皮埃尔广场”驻足，坐在长椅上观察对面市政厅文艺复兴式立面上精致的仿大理石彩绘和镀金装饰`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进凉爽幽暗的“圣艾蒂安教堂”，让你的眼睛适应光线后，去寻找那尊被誉为“法国最美雕塑”之一的苍白大理石《骷髅扛旗者》`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，拐入迷宫般的后街小巷，比如“山羊街”，这里建筑间距更近，更能感受中世纪城市的亲密尺度与光影游戏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并仰望那些隐藏在庭院深处的壮观“圆顶塔楼”和旋转石阶，它们是文艺复兴时期豪宅最典型的特征`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下阶梯，来到相对开阔的“城堡广场”，这里可以回望上城建筑层层叠叠的屋顶景观`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后沿着“剧院街”的缓坡向下，走出老城，到默兹河畔的绿地散步，从对岸回望整个雄踞在山丘上的金色石头城全景`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼门仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在门洞内侧向外拍，框架式构图将门洞外的古典街道和光线纳入，故事感极强`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣皮埃尔广场对角构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮市政厅立面时，站在广场对角，将广场地面、长椅上的当地人和华丽的建筑立面一同收入镜中，体现生活与遗产的交融`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣艾蒂安教堂侧巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射入教堂与住宅间的狭窄小巷，捕捉光线在凹凸不平的石墙和地面上形成的强烈明暗对比与质感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山羊街阶梯俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在阶梯中段，向下拍摄蜿蜒曲折、被高大石墙夹峙的古老阶梯，引导线构图充满纵深感与神秘感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`默兹河对岸全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，步行至河南岸的“欧洲桥”附近，用长焦镜头压缩空间，拍摄上城建筑群在温暖夕阳光线下如同黄金模型的全景`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`巴勒迪克的建筑石材在阴天呈冷灰色，在阳光下呈暖金色，晴天的清晨和黄昏是创作的黄金时间。拍摄居民生活场景时请保持礼貌距离，优先使用长焦镜头，若想拍摄人物特写，请务必先微笑征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住上城内由16世纪贵族宅邸改造的精品酒店，睡在古老的石墙与木梁之下，清晨在私密的小花园里用早餐，彻底融入文艺复兴氛围`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温馨民宿体验`}</h4>
                  <p className="text-sm text-green-800">{`选择上城边缘一处家庭经营的民宿，主人能提供最地道的游览建议和家常法餐，房间窗户正对着错落的古老屋顶和教堂钟楼`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代便捷之选`}</h4>
                  <p className="text-sm text-yellow-800">{`下城火车站附近舒适的三星级酒店，性价比高，交通方便，步行10分钟即可进入上城区域，适合自驾或晚抵达的旅客`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河畔宁静居所`}</h4>
                  <p className="text-sm text-purple-800">{`默兹河畔经过现代化设计的公寓，拥有宽敞的落地窗和阳台，可欣赏河水与上城同框的日夜美景，享受静谧`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`上城内的住宿数量极其有限，务必提前数月预订。住在城内夜晚极为安静，能听到教堂钟声，但需适应古老的建筑结构（可能无电梯）。下城区域生活设施更齐全，餐馆选择更多。无论住在哪里，巴勒迪克整体治安都非常良好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴勒迪克许多天后，我脑海里反复回放的，不是某一个具体的雕像或门廊，而是一种整体的、宁静的“气氛”。在这个追求速度和更新的世界里，它像一个坚定的逆行者，固执地守护着一种过去的节奏和美学。它告诉我们，美不一定需要宏伟的尺度，精致与和谐本身就有直击人心的力量。那些被无数双手抚摸得光滑的石阶，那些窗台上年年盛开的鲜花，让历史不再是教科书里冰冷的章节，而是可触摸、可居住的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也在寻找一个能让自己真正慢下来、让眼睛和心灵都得到细致滋养的地方，请一定要来巴勒迪克的上城。它可能不会出现在大多数旅游攻略的首页，但这正是它的珍贵之处。它是一封来自16世纪的亲笔信，没有华丽的邮戳，却用每一块石头、每一道刻痕，安静地等待着那些愿意细细品读的旅人。在这里，你不是一个观光客，而是一个偶然闯入了时光缝隙的幸运儿，得以在几个世纪的宁静中，重新找回对生活之美的细腻感知。这，或许就是深度旅行最珍贵的礼物。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/place-stanislas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    南
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">南锡斯坦尼斯拉斯广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Stanislas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albi-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔比主教座堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albi Cathedral</p>
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
