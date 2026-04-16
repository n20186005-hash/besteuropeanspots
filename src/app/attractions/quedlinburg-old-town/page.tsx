import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奎德林堡老城 Quedlinburg Old Town｜走进千年未改的童话，迷失在1300座木筋屋的迷宫里 - 最佳欧洲景点',
  description: '你从火车站那条略显平淡的现代街道拐个弯，仿佛不小心撞开了一扇时间之门。第一眼看到的不是什么标志性建筑，而是一条倾斜的、被岁月打磨得光润无比的鹅卵石小路，它像一条溪流，把你不由分说地引向一片由棕色、白色、淡粉和淡绿色木筋墙交织成的海洋。空气里有股清冽的味道，混合着古老木材的微香、从咖啡馆飘出的现磨咖啡...',
}

export default function QuedlinburgOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奎德林堡老城', href: '/attractions/quedlinburg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奎德林堡老城・Quedlinburg Old Town・德国・奎德林堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            你从火车站那条略显平淡的现代街道拐个弯，仿佛不小心撞开了一扇时间之门。第一眼看到的不是什么标志性建筑，而是一条倾斜的、被岁月打磨得光润无比的鹅卵石小路，它像一条溪流，把你不由分说地引向一片由棕色、白色、淡粉和淡绿色木筋墙交织成的海洋。空气里有股清冽的味道，混合着古老木材的微香、从咖啡馆飘出的现磨咖啡香，还有不知哪家后院雨后泥土和植物的气息。耳朵里最先捕捉到的，是行李箱轮子在不规则石头上发出的“咕隆咕隆”的闷响，接着是清脆的鸟鸣，从那些高高低低的、歪歪扭扭的山墙屋顶上传来。
这里不像一个被圈起来的景区，它就是生活本身。你看见一位老奶奶从一扇低矮的、门框已经有些倾斜的木门里探出身来，在窗台上的花箱里修剪天竺葵；面包店门口，刚出炉的黑麦面包被装在藤篮里，热气裹挟着麦香扑鼻而来；几个孩子笑着从你身边跑过，消失在一条窄得似乎只能容一人通过的小巷里。阳光透过木筋屋之间狭窄的缝隙，在石板路上切出明暗交替的光带，灰尘在光柱里舞蹈。那一刻你明白了，奎德林堡的魅力不在于某一座宫殿或教堂（虽然它们极其重要），而在于这整个肌体的呼吸，在于这上千座木筋屋构成的、迷宫般的整体。每一栋房子都有一张不同的“脸”，雕刻着丰收的寓意、守护的圣人或是屋主职业的符号，你需要慢下来，仰起头，细细地读。
爬到城堡山的半腰回望，整个老城的屋顶如同一片波涛起伏的、暗红色的海洋，其间点缀着无数哥特式的小尖顶和烟囱。风从哈茨山的方向吹来，带来森林的凉意，也摇动着那些古老的窗扉，发出轻微的“吱呀”声。这里有一种惊人的宁静与完整，仿佛时间在某个节点被仁慈地按下了暂停键，没有战争的炮火将它彻底摧毁，也没有现代发展的推土机将它粗暴抹平。它只是静静地、略带倔强地活着，像一个做完所有家务后，坐在阳光下打盹的老人，皱纹里藏着所有的故事。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你从火车站那条略显平淡的现代街道拐个弯，仿佛不小心撞开了一扇时间之门。第一眼看到的不是什么标志性建筑，而是一条倾斜的、被岁月打磨得光润无比的鹅卵石小路，它像一条溪流，把你不由分说地引向一片由棕色、白色、淡粉和淡绿色木筋墙交织成的海洋。空气里有股清冽的味道，混合着古老木材的微香、从咖啡馆飘出的现磨咖啡香，还有不知哪家后院雨后泥土和植物的气息。耳朵里最先捕捉到的，是行李箱轮子在不规则石头上发出的“咕隆咕隆”的闷响，接着是清脆的鸟鸣，从那些高高低低的、歪歪扭扭的山墙屋顶上传来。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这里不像一个被圈起来的景区，它就是生活本身。你看见一位老奶奶从一扇低矮的、门框已经有些倾斜的木门里探出身来，在窗台上的花箱里修剪天竺葵；面包店门口，刚出炉的黑麦面包被装在藤篮里，热气裹挟着麦香扑鼻而来；几个孩子笑着从你身边跑过，消失在一条窄得似乎只能容一人通过的小巷里。阳光透过木筋屋之间狭窄的缝隙，在石板路上切出明暗交替的光带，灰尘在光柱里舞蹈。那一刻你明白了，奎德林堡的魅力不在于某一座宫殿或教堂（虽然它们极其重要），而在于这整个肌体的呼吸，在于这上千座木筋屋构成的、迷宫般的整体。每一栋房子都有一张不同的“脸”，雕刻着丰收的寓意、守护的圣人或是屋主职业的符号，你需要慢下来，仰起头，细细地读。</p>
              <p className="text-gray-700 leading-relaxed mb-4">爬到城堡山的半腰回望，整个老城的屋顶如同一片波涛起伏的、暗红色的海洋，其间点缀着无数哥特式的小尖顶和烟囱。风从哈茨山的方向吹来，带来森林的凉意，也摇动着那些古老的窗扉，发出轻微的“吱呀”声。这里有一种惊人的宁静与完整，仿佛时间在某个节点被仁慈地按下了暂停键，没有战争的炮火将它彻底摧毁，也没有现代发展的推土机将它粗暴抹平。它只是静静地、略带倔强地活着，像一个做完所有家务后，坐在阳光下打盹的老人，皱纹里藏着所有的故事。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奎德林堡老城" />
                <InfoRow label="英文名称" value="Quedlinburg Old Town" />
                <InfoRow label="正式名称" value="Quedlinburg Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="奎德林堡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="这里是萨克森王朝的摇篮，曾是神圣罗马帝国最重要的政治与文化中心之一，其女子修道院在长达数世纪里掌握着非凡的政治与宗教权力。" />
                <InfoRow label="建筑特色" value="一座拥有超过1300座保存完好的木桁架（木筋）房屋的露天博物馆，从文艺复兴到巴洛克风格，层层叠叠，宛如一部立体的建筑编年史。" />
                <InfoRow label="建筑风格" value="以中世纪至近代的木筋屋建筑为主体，混合了罗曼式、哥特式及后哥特式民间建筑风格，形成独一无二的中世纪城镇风貌。" />
                <InfoRow label="文化价值" value="作为完整保存了中世纪城市肌理与建筑遗产的典范，它不仅是德国浪漫主义之路的明珠，更是理解中世纪欧洲城镇生活、手工艺与宗教权力的活态教科书。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城公共区域全天24小时开放。城内各博物馆、城堡及教堂等独立景点开放时间不一，通常为上午10点至下午5点，周一多数闭馆。圣诞市场期间（11月底至12月23日）老城广场区域会延长灯光和摊位的开放时间至晚上8点。冬季（11月至3月）部分小景点可能缩短开放时间或需预约，建议行前查阅官网。" />
              <InfoRow label="门票价格" value="进入奎德林堡老城街区本身免费。参观主要景点需购票：城堡山联票（包含城堡博物馆、珍宝馆及圣塞尔瓦提乌斯教堂地下墓穴）成人约10欧元，优惠票约8欧元。单独参观圣塞尔瓦提乌斯教堂免费，但登塔或进入特殊区域需小额捐款。持有“哈茨卡”地区通票可享折扣。6岁以下儿童免费，家庭套票划算。" />
              <InfoRow label="地址" value="Markt 1, 06484 Quedlinburg, Germany" />
              <InfoRow label="交通方式" value="从柏林中央火车站乘坐RE（区域快车）前往，方向哈雷/哈茨山，在“Quedlinburg”站下车，车程约2.5小时，每小时至少一班车。从汉诺威中央火车站出发，乘坐ICE到哥廷根，再转乘区域列车，总耗时约2小时。火车站距离老城中心仅10-15分钟步行路程，拖着行李走石板路略有不便，但沿途风景已是序曲。如果自驾，可将车停在老城边缘的指定停车场（如“P am Brühl”），老城内部为步行区，严禁外来车辆驶入。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要听懂奎德林堡的絮语，你得把时钟拨回一千多年前。公元919年，萨克森公爵亨利在这里被选为国王，他就是后来被称为“捕鸟者亨利”的亨利一世，奠定了德意志王国的基础。他钟爱奎德林堡，将其作为最重要的行宫之一。他去世后，他的妻子玛蒂尔达王后和儿子奥托大帝（后来的奥托一世）为了纪念他，在这里建立了一座女子修道院。可别小看这座修道院，它可不是普通的宗教机构。它由国王直接庇护，享有帝国直辖权，其女院长通常是来自皇室或顶级贵族家庭的公主，她们不仅是精神领袖，更是拥有行政、司法甚至铸币权的世俗统治者。在长达八个世纪里，奎德林堡修道院是神圣罗马帝国境内最富有、最有影响力的女性权力中心之一，这里的修女们管理着广袤的土地，影响着帝国政治，其收藏的圣物和珍宝令人咋舌。</p>
              <p className="text-gray-700 leading-relaxed mb-4">正是这种特殊的地位，为老城的繁荣提供了黄金般的保障。商人和手艺人们聚集在城堡山脚下，寻求庇护，进行贸易。从12世纪到17世纪，那些我们今天看到的精美木筋屋被一栋接一栋地建造起来。它们不是随意搭建的，早期的房子低矮实用，线条粗犷；到了文艺复兴鼎盛期，富裕的市民和行会开始争奇斗艳，外墙上出现了繁复的雕刻、寓言图案和华丽的彩绘，每一道木梁的排列都像一句炫耀的宣言。你看那座建于1612年的“蓝钟屋”，它深蓝色的木筋与白色的墙面形成鲜明对比，山墙上雕刻着太阳、月亮和星星，那是当时人们对宇宙的浪漫想象。老城在三十年代战争中幸免于彻底毁灭，但经济一度萧条，这种停滞反而意外地保护了它，没有资金进行大规模“现代化”改造，古老的样貌得以冻结。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正的劫难发生在20世纪。纳粹政权歪曲历史，将亨利一世奉为“第一帝国”的象征，奎德林堡被大肆宣传，城堡山上建起了庞大的纪念建筑。二战末期，幸运的是，美军兵不血刃地占领了这里，老城奇迹般躲过了轰炸。但战后它被划入东德境内，在缺乏维修资金的计划经济时代，这些木屋风雨飘摇，日益破败。转折点发生在两德统一后。人们猛然意识到这片宝藏正濒临坍塌。一场可能是德国历史上最大规模的古城抢救运动开始了，一栋楼一栋楼地修复，严格按照历史原貌。1994年，联合国教科文组织将奎德林堡老城、城堡山和教堂山列入世界遗产名录，这顶桂冠不仅肯定了它的过去，更确保了它未来的生命。今天你看到的每一片光洁的木墙、每一块稳固的石基，背后都是无数匠人和历史学家心血的重生魔法。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议至少留出一整天给奎德林堡，如果你爱摄影或喜欢慢节奏，住上一晚更能捕捉它的晨昏之美。最佳抵达时间是早上九点前，这时旅游团大巴还未涌入，阳光柔和，最适合拍照。整体游览节奏宜慢不宜快，核心是“迷失”。从火车站步行至老城，先不急着冲向城堡山，而是在纵横交错的巷弄里随意穿行半小时，建立初步的感官印象。上午精力充沛时攀登城堡山，参观博物馆和教堂，俯瞰全景。中午下山，在市场广场找家餐馆享用当地美食。下午继续深入探索那些名字都充满诗意的小巷，如“诗人之巷”，并参观几座有代表性的木筋屋博物馆。傍晚时分，当一日游的游客散去，整个老城会重归宁静，这时散步去教堂山，感受落日余晖下的神圣氛围。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>周末和夏季午后是大型旅游团的高峰期，城堡山和市场广场会非常拥挤，建议将核心参观安排在上午或傍晚。
老城的石板路对高跟鞋和行李箱轮子极不友好，务必穿一双舒适耐磨的平底鞋，并尽量轻装简行。
不要只盯着主干道，真正的宝藏往往藏在最窄、最不起眼的小巷深处，大胆走进去，迷路也是体验的一部分。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从火车站沿着“Steinbrücke”路轻松步行十分钟，你会穿过护城河遗迹，在“新门”的拱洞下正式踏入中世纪的世界。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">任由自己被第一条吸引你的小巷拐走，比如“Wordgasse”，用指尖触摸那些冰凉而光滑的鹅卵石，抬头看两旁木筋屋几乎要在头顶相接的天空线。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">向着老城中心的制高点——城堡山进发，沿着蜿蜒的坡道向上，沿途回望，老城的红屋顶如同潮水般在你脚下铺展开来。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">花至少两小时沉浸在城堡山上的历史中，在罗马式的圣塞尔瓦提乌斯教堂地下墓穴感受千年肃穆，在珍宝馆凝视那些见证了帝国权柄的精致圣物。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下山后直奔生机勃勃的市场广场，在市政厅漂亮的文艺复兴立面下，找张露天咖啡座的椅子坐下，点一杯“哈茨山牛奶咖啡”，看广场上的彩色喷泉和往来行人。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">选一条与上午不同的路线钻进小巷网络，这次试着寻找那些有特殊雕刻的房子，比如刻着酿酒师、面包师或裁缝工具图案的，和它们合影。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在日落前漫步到稍显安静的教堂山，参观圣维珀蒂教堂，然后在教堂外的长椅上坐一会儿，听晚钟响起，看归鸟还巢。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">如果还有余力，晚餐后一定要再出来走走，当复古的煤气路灯一盏盏亮起，昏黄的光晕洒在凹凸不平的墙面上，老城会展现出它最神秘、最浪漫的一面。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡山观景台全景</h4>
                  <p className="text-sm text-gray-700">清晨或日落前半小时，使用广角镜头，将前景的古城屋顶、中景的圣塞尔瓦提乌斯教堂尖塔和远景的哈茨山轮廓一并纳入，营造深远的层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. “诗人之巷”（Schuhof）仰拍</h4>
                  <p className="text-sm text-gray-700">正午时分阳光直射时最佳，站在巷子中央仰拍，让两侧极具韵律感的、色彩斑斓的木筋墙和狭窄的天空构成一个完美的“一线天”构图。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 市场广场喷泉与市政厅</h4>
                  <p className="text-sm text-gray-700">下午三四点，阳光斜射在广场建筑上，光影效果极佳，以喷泉为前景拍摄市政厅的文艺复兴立面，可以等待行人或鸽子进入画面增添生气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 任意一条无名小巷的纵深</h4>
                  <p className="text-sm text-gray-700">找一个有光影对比的午后，蹲低机位，让湿漉漉的鹅卵石路形成引导线，将视线引向小巷尽头的一盏灯或一扇门，故事感瞬间拉满。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 木筋屋细节特写</h4>
                  <p className="text-sm text-gray-700">随时都可以进行，对准某栋房屋外墙上精美的雕刻、古老的铁艺招牌或是窗台上怒放的鲜花，用大光圈虚化背景，捕捉建筑的生命肌理。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄民居时请务必尊重隐私，避免将镜头直接对准窗户或阳台内的居民，快速抓拍建筑外观即可。</li>
                <li>• 阴雨天气其实是拍摄奎德林堡的绝佳时机，湿漉漉的石板路会反射光线和色彩，木筋墙的颜色也会变得异常饱和深沉，别忘了保护好相机。</li>
                <li>• 许多最美的角落光线不足，建议携带一个轻便的三脚架，以便在晨昏或室内进行长曝光，获得清晰稳定的画面。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">沉浸式古城客栈</h4>
                  <p className="text-sm text-blue-800">入住一栋经过精心修复的、拥有500年历史的木筋屋本身，楼梯吱呀作响，天花板是裸露的原木，但设施现代舒适，清晨在雕花木窗边醒来，仿佛成了历史的一部分。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计师精品酒店</h4>
                  <p className="text-sm text-green-800">由老城中心一座老邮局改造，在保留原始外墙和结构的基础上，内部是极简的北欧风格设计，巨大的玻璃窗将古城景色引入室内，适合追求独特美学和舒适度的旅行者。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">温馨家庭旅馆</h4>
                  <p className="text-sm text-yellow-800">位于老城边缘一条安静的小巷里，由一对热情的当地夫妇经营，房间不大但一尘不染，早餐是女主人自制的果酱和新鲜烘焙的面包，能给你最地道的“在家”感觉。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">哈茨山脚下庄园酒店</h4>
                  <p className="text-sm text-purple-800">如果不介意离老城中心有10分钟车程，可以选择坐落在田园风光中的四星级酒店，房间宽敞，拥有水疗中心和俯瞰葡萄园的露台，适合想要在古城探索与自然放松间取得平衡的游客。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">奎德林堡的住宿规模不大，尤其在圣诞市场期间和夏季周末非常紧俏，务必提前数月预订才能心仪的选择。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城中心区域的住宿虽然位置绝佳，但夜晚可能更热闹（夏季有餐馆营业），对声音敏感的话可以选择靠近教堂山或老城外围的住处，更为静谧。</p>
              <p className="text-gray-700 leading-relaxed mb-4">许多老建筑改造的酒店没有电梯，预订时如果行李沉重或行动不便，最好提前询问房间所在楼层或请求一楼房间。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开奎德林堡好些日子了，我脑海里最清晰的画面，不是某座具体的建筑，而是那种“活着的历史”的触感。它不是被供奉在玻璃柜里的标本，而是依然在呼吸、在生长、在每日的烟火气中与人耳鬓厮磨的存在。你会在某个转角，看到一栋木筋屋的墙角，新修补的木梁颜色鲜亮，紧挨着已经发黑、满是裂纹的古老部分，那种新旧毫无芥蒂的共生，让人莫名感动。它坦然地展示着时间的层次，不试图伪装完美，这种真实，比任何修复如新的古镇都更有力量。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率、一切都在快速迭代的世界里，奎德林堡像一位笃定的守护者，它告诉我们，缓慢、持久、与土地和传统深深联结的生活，依然具有不可替代的价值。来这里，你不是为了打卡，而是为了校准内心的时钟。当你放慢脚步，在一栋有着歪斜门框的房子前驻足，猜想它里面住过多少代人，发生过多少悲欢，你便与一段更广阔、更深厚的时间连接上了。它让我们相信，有些美好可以穿越千年战火与变迁，温柔而坚韧地留存下来，等待着与懂得欣赏的眼睛相遇。这或许就是每一位深度旅者应该来的理由：不仅为看风景，更是为了被这样的韧性治愈，并带走一份关于“永恒”的、微小而确切的信念。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
