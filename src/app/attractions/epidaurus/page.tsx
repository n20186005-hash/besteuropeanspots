import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃皮达鲁斯古剧场・Epidaurus Theatre・希腊・埃皮达鲁斯 | 最佳欧洲景点',
  description: '探索埃皮达鲁斯古剧场，这座古希腊时期最著名的露天剧场，以其完美的声学效果和精湛的古希腊建筑工艺闻名于世。',
}

export default function EpidaurusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃皮达鲁斯古剧场', href: '/attractions/epidaurus' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">埃皮达鲁斯古剧场・Epidaurus Theatre・希腊・埃皮达鲁斯</h1>
          <p className="text-lg text-gray-600 mb-6">
            埃皮达鲁斯古剧场是古希腊时期最著名的露天剧场之一，始建于公元前340年至公元前300年，由古希腊建筑师波吕克勒托斯设计，承载着近2400年的历史。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              埃皮达鲁斯古剧场是古希腊时期最著名的露天剧场之一，始建于公元前340年至公元前300年，由古希腊建筑师波吕克勒托斯设计，承载着近2400年的历史。剧场依山而建，呈半圆形布局，以石灰石为主要建材，留存完整，可容纳约15000名观众，其神奇的声学效果堪称建筑奇迹，即使在最高排也能清晰听到舞台上的细微声响，是探寻古希腊戏剧文化、感受古代建筑智慧的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="埃皮达鲁斯古剧场" />
                <InfoRow label="英文名称" value="Epidaurus Theatre" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="埃皮达鲁斯（Epidaurus）" />
                <InfoRow label="所属区域" value="伯罗奔尼撒半岛阿尔戈利达州" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="分季节调整，5-10月8:00-20:00" />
                <InfoRow label="门票价格" value="成人20欧元/人，学生半价" />
                <InfoRow label="建议游览" value="2-3小时" />
                <InfoRow label="最佳季节" value="4-10月" />
                <InfoRow label="世界遗产" value="1988年列入世界文化遗产" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">成人票：</span>20欧元/人，学生、65岁以上老人半价（10欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">通票说明：</span>可通用剧场、埃皮达鲁斯考古遗址及阿斯克勒庇俄斯圣所博物馆，无需单独购票</p>
                <p><span className="font-medium">免费开放日：</span>3月6日、4月18日、5月18日、9月最后一个周末、11月-3月每月第一和第三个周日、10月28日</p>
                <p><span className="font-medium">优惠政策：</span>线上提前1天购票可享受10%优惠，夏季建议提前线上购票避免排队</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">自驾：</span>雅典→埃皮达鲁斯（2.5小时，全程高速）</p>
                <p><span className="font-medium">公共交通：</span>雅典→阿尔戈斯市（2小时，25欧元）→打车（30分钟，25欧元）</p>
                <p><span className="font-medium">市内交通：</span>埃皮达鲁斯小镇观光车（15分钟，3欧元）或打车（10分钟，12欧元）</p>
                <p><span className="font-medium">停车场：</span>剧场入口外专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              埃皮达鲁斯古剧场的历史渊源与古希腊的宗教信仰、戏剧文化紧密相关，其发展历程贯穿了古希腊的鼎盛时期，是古希腊建筑艺术与戏剧文化融合的典范。剧场作为阿斯克勒庇俄斯圣所的重要组成部分，与圣所内的神庙、祭坛、医院等建筑共同构成了古希腊的宗教与医疗中心，承载着古代希腊人对健康的追求与对艺术的热爱。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              阿斯克勒庇俄斯是古希腊神话中的医药之神，相传他能治愈各种疾病，因此古希腊人在埃皮达鲁斯修建了规模宏大的圣所，用于祭祀阿斯克勒庇俄斯，同时为前来求医的人们提供治疗与休养的场所。早在公元前6世纪，阿斯克勒庇俄斯圣所就已初具规模，随着圣所的不断发展，祭祀活动日益频繁，戏剧表演逐渐成为祭祀仪式的重要组成部分，为了满足大量信徒与观众的需求，古剧场应运而生。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前340年至公元前300年，在古希腊建筑师波吕克勒托斯的主持下，埃皮达鲁斯古剧场正式建成，最初用于举办祭祀阿斯克勒庇俄斯的戏剧演出，演出内容多为歌颂医药之神的赞歌、古希腊神话故事及悲剧、喜剧作品。剧场的设计充分体现了古希腊人的建筑智慧，半圆形的布局、阶梯式的观众席、精准的声学设计，不仅满足了大规模演出的需求，更创造了"声传千里"的建筑奇迹，其声学效果即使在现代也难以复制。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              关于剧场神奇声学效果的成因，主流观点认为有两大关键因素：一是剧场的石灰座椅按特定角度摆布，能够有效剔除低频杂音（如观众的嘈杂声），同时放大高频的演员台词与乐器声音；二是每个观众座位下方都埋有一个深缸，开口朝向舞台，起到了共鸣放大的作用，让舞台上的细微声响能够清晰传递到剧场的每一个角落。这种精妙的设计，展现了古希腊人在建筑、声学领域的高超造诣，也让埃皮达鲁斯古剧场成为世界建筑史上的典范。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              在古希腊时期，埃皮达鲁斯古剧场是戏剧文化的重要载体，每年都会举办盛大的戏剧节，来自希腊各地的剧作家、演员齐聚于此，上演经典的悲剧与喜剧作品，吸引了成千上万的观众前来观看。当时的戏剧演出不仅是艺术欣赏，更是一种宗教活动与社会交流方式，人们通过观看戏剧，表达对神的敬仰，传递道德观念，促进社会的和谐发展。
            </p>
            <p className="text-gray-700 leading-relaxed">
              随着罗马帝国的崛起与古希腊文明的衰落，埃皮达鲁斯古剧场逐渐被废弃，圣所也随之没落，剧场被掩埋在尘土与植被之中，长达数千年之久。直到19世纪，考古学家开始对埃皮达鲁斯地区进行考古发掘，古剧场才重见天日，经过多次修缮与保护，严格遵循"修旧如旧"的原则，保留了剧场的原始风貌与声学奇迹，让这座千年建筑重新焕发生机。如今，埃皮达鲁斯古剧场不仅是希腊重要的历史文化遗产与旅游胜地，更是世界戏剧文化的重要象征。每年夏季，希腊节都会在古剧场举办盛大的戏剧演出，来自世界各地的艺术家在此登台表演，重现古希腊戏剧的辉煌，让游客在千年剧场中，感受古代艺术与现代文化的碰撞与融合。同时，剧场也成为建筑、声学领域的研究热点，吸引着全球学者前来探寻其背后的古代智慧。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约1公里，建议游览2-3小时，节奏舒缓，兼顾打卡与体验感</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：剧场游客中心</h5>
                    <p>可领取导览手册、租赁讲解设备（8欧元/台），预约人工讲解（英文15欧元/人，中文20欧元/人）</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：剧场入口与停车场（步行5分钟）</h5>
                    <p>入口处设有剧场简介牌与世界文化遗产标识，可拍照打卡，周边有小型商铺</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：古剧场主体（步行3分钟）</h5>
                    <p>核心景点，半圆形观众席依山而建，共55排，可登上最高处体验声学效果，也可到舞台中央感受演员视角</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：舞台遗迹（位于剧场中央）</h5>
                    <p>留存古代舞台基座与背景墙遗迹，周边石柱与雕刻残件展现古希腊精湛雕刻艺术</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：阿斯克勒庇俄斯圣所遗址（步行8分钟）</h5>
                    <p>祭祀医药之神核心区域，留存神庙、祭坛、医院、宿舍等遗迹，了解古希腊宗教信仰与医疗文化</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：阿斯克勒庇俄斯圣所博物馆（步行5分钟）</h5>
                    <p>收藏剧场及圣所出土文物，包括雕塑、陶器、铭文石碑等，详细介绍埃皮达鲁斯历史发展与宗教文化</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：剧场出口</h5>
                    <p>出口处有纪念商店，可购买古剧场相关纪念品，如剧场模型、声学原理手册、古希腊戏剧海报等</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 剧场内路面多为石灰石台阶与石板路，部分区域坡度较大，建议穿舒适的防滑步行鞋</li>
                  <li>• 剧场内禁止大声喧哗、随意触摸文物与遗迹，禁止攀爬座椅与舞台</li>
                  <li>• 夏季希腊气候炎热，紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 旅游旺季（6-8月）及希腊节期间游客较多，建议避开正午人流高峰</li>
                  <li>• 若观看希腊节演出，需提前线上购票，遵守演出秩序，禁止使用闪光灯拍照</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">剧场最高排观众席</h4>
                  <p className="text-gray-700 text-sm">拍摄剧场全景最佳机位，可完整拍摄半圆形布局，阶梯层层递进，画面恢弘大气。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">舞台中央</h4>
                  <p className="text-gray-700 text-sm">拍摄剧场细节与声学体验核心机位，可拍摄观众席全景，阶梯式座椅延伸至远方，画面极具纵深感。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">剧场入口通道</h4>
                  <p className="text-gray-700 text-sm">入口通道两侧是石灰石墙体，留存古代建筑痕迹，可拍摄剧场入口全貌与观众席局部，画面简洁有层次感。最佳时间：清晨8:00-9:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣所遗址观景台</h4>
                  <p className="text-gray-700 text-sm">位于阿斯克勒庇俄斯圣所遗址高处，可拍摄古剧场与圣所遗址同框照片，剧场半圆形轮廓与圣所神庙遗迹相互映衬。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">博物馆展厅</h4>
                  <p className="text-gray-700 text-sm">收藏大量与古剧场、圣所相关文物，雕塑、铭文石碑与剧场模型是拍照重点，可近距离拍摄文物细节。拍摄时禁止使用闪光灯</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:00-9:00）和傍晚（17:00-18:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、浅灰色，与石灰石建筑、山丘风光形成对比</li>
                  <li>• 拍摄剧场全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出座椅、雕刻纹理</li>
                  <li>• 拍摄人物时可选择在观众席阶梯、舞台中央等位置，搭配剧场背景，营造复古庄重氛围</li>
                  <li>• 若想拍摄声学相关创意照片，可在舞台中央拍摄人物说话场景，凸显剧场声学奇迹</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">埃皮达鲁斯水下古城遗址</span>
                      <p className="text-sm text-gray-600">距离古剧场约10公里，打车20分钟，费用约20欧元。水下留存古代防波堤遗迹，由红绿灯塔标示方位</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">纳夫普利翁小镇</span>
                      <p className="text-sm text-gray-600">距离古剧场约35公里，打车40分钟，费用约35欧元。地中海风情海滨小镇，有古老城堡、石板街巷、海景餐厅</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">阿尔戈斯古城</span>
                      <p className="text-sm text-gray-600">距离古剧场约25公里，打车30分钟，费用约28欧元。古希腊重要城市，留存古希腊剧院、神庙、城墙等遗迹</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">稍远但值得一游</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">迈锡尼遗址</span>
                      <p className="text-sm text-gray-600">距离古剧场约40公里，打车45分钟，费用约40欧元。爱琴文明重要发祥地，世界文化遗产，留存环形城墙、狮子门、王室陵墓</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">梯林斯考古遗址</span>
                      <p className="text-sm text-gray-600">距离古剧场约45公里，打车50分钟，费用约45欧元。世界文化遗产，迈锡尼文明重要组成部分，留存"独眼巨人墙"风格石质城墙</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿位置选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">埃皮达鲁斯小镇</h5>
                    <p>距离古剧场约8公里，出行便捷，氛围宁静，多为当地特色民居改造住宿，能体验乡村风情，距离港口较近</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">纳夫普利翁小镇</h5>
                    <p>距离古剧场约35公里，以海景酒店与特色民宿为主，适合喜欢海滨风情游客，可欣赏地中海海景</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">阿尔戈斯古城</h5>
                    <p>距离古剧场约25公里，住宿选择更多，周边商圈发达，购物就餐便捷，适合预算有限或喜欢热闹氛围游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品海景酒店</h5>
                    <p>位于纳夫普利翁小镇，装修融合希腊传统元素与现代风格，部分设有海景露台，价格约75-145欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色乡村酒店</h5>
                    <p>位于埃皮达鲁斯小镇，装修简约古朴，周边植被繁茂，氛围宁静，价格约65-120欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>埃皮达鲁斯小镇与阿尔戈斯古城内有很多小众民宿，多由当地民居改造，价格约38-85欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>阿尔戈斯古城内有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约22-48欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 埃皮达鲁斯旅游旺季为6-8月，此时恰逢希腊节，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-8欧元/天）</li>
                  <li>• 埃皮达鲁斯小镇部分民宿位于山坡上，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-6月、9-10月）气候宜人，游客较少，住宿价格适中，是最佳时节</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 4-10月：气候温和，适合户外活动</li>
                    <li>• 6-8月：希腊节期间，可观看戏剧演出，但游客较多</li>
                    <li>• 春秋季：人流相对较少，价格更优惠，体验更佳</li>
                    <li>• 清晨傍晚：光线柔和，适合拍照，游客较少</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 剧场内路面多为石灰石台阶与石板路，建议穿舒适的防滑步行鞋</li>
                    <li>• 剧场内禁止大声喧哗、随意触摸文物与遗迹，禁止攀爬座椅与舞台</li>
                    <li>• 夏季希腊气候炎热，紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                    <li>• 若观看希腊节演出，需提前线上购票，遵守演出秩序</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上观众席最高处，亲身体验神奇的声学效果</li>
                    <li>• 站在舞台中央，感受古代演员的表演视角</li>
                    <li>• 参观阿斯克勒庇俄斯圣所，了解古希腊医药文化</li>
                    <li>• 夏季观看希腊节戏剧演出，感受千年剧场鲜活魅力</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地电压：230V，插头为Type F型</li>
                    <li>• 货币：欧元，支持信用卡和移动支付</li>
                    <li>• 语言：希腊语，但旅游区英语基本通行</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}