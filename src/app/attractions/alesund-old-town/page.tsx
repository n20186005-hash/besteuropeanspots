import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥勒松老城 Ålesund Old Town｜童话般的新艺术主义建筑群 - 最佳欧洲景点',
  description: '想象一下，你走进了一个由糖果色积木搭建的童话小镇，这就是奥勒松老城给我的第一印象。1904年那场毁灭性的大火后，整个城市浴火重生，被统一规划重建为新艺术主义风格。漫步在蜿蜒的街道上，两边是尖顶、塔楼和装饰着龙、花卉浮雕的彩色房屋，仿佛走进了安徒生的故事书里。海风带着咸咸的味道，海鸥在头顶盘旋，港口停...',
}

export default function AlesundOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥勒松老城', href: '/attractions/alesund-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥勒松老城</h1>
          <p className="text-xl text-gray-600 mb-4">Ålesund Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">挪威</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">奥勒松</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一个由糖果色积木搭建的童话小镇，这就是奥勒松老城给我的第一印象。1904年那场毁灭性的大火后，整个城市浴火重生，被统一规划重建为新艺术主义风格。漫步在蜿蜒的街道上，两边是尖顶、塔楼和装饰着龙、花卉浮雕的彩色房屋，仿佛走进了安徒生的故事书里。海风带着咸咸的味道，海鸥在头顶盘旋，港口停泊着漂亮的游艇。最棒的是爬上阿克斯拉山，从观景台俯瞰整个老城和峡湾，那些五彩的房子像乐高一样散落在岛屿和海峡之间，美得让人屏住呼吸。这里没有大城市的喧嚣，只有宁静、色彩和浓浓的历史艺术气息。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城街道和公共区域全年全天开放。阿克斯拉观景台步道冬季可能因冰雪湿滑，建议穿着防滑鞋。部分代表性建筑如 Jugendstilsenteret（新艺术中心）博物馆有固定开放时间（通常夏季延长，冬季缩短）和门票（约100-150挪威克朗），学生和儿童有优惠。许多建筑仍是私人住宅或办公场所，请尊重居民隐私，勿擅入。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松的故事充满了戏剧性的转折。在1904年1月23日那个寒冷的夜晚，一场起因于工厂的灾难性大火，在狂风助力下几乎将这座木结构城市夷为平地，约1万人无家可归。然而，这场悲剧却成了城市新生的起点。当时，统治挪威的德国皇帝威廉二世迅速派船送来了援助物资，来自欧洲各地的建筑师，特别是德国和英国的，参与了重建工作。他们带来了当时欧洲最流行的新艺术运动风格。于是，在短短三年内，一座全新的、风格统一的石头城市从灰烬中崛起。建筑师们尽情发挥创意，用曲线代替直线，将挪威的神话动物、自然花卉融入建筑立面的石雕和铁艺装饰中。漫步今天的老城，你看到的不仅是建筑，更是一段关于 resilience（韧性）和社区精神的鲜活历史。它像一个凤凰涅槃的童话，把最深的伤痛变成了最独特的美丽。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从港口附近的游客中心开始，先感受海滨氛围，然后深入老城街区欣赏建筑细节，最后攀登418级台阶至阿克斯拉观景台俯瞰全景。全程步行，悠闲游览约需3-4小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从布鲁斯安德码头出发，欣赏彩色房屋在水中的倒影。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步Apollon街和Kongens gate，抬头细看建筑立面的浮雕和装饰。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观新艺术中心，了解建筑风格和历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  穿过小公园，开始攀登通往阿克斯拉观景台的台阶。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  在观景台和山顶公园尽情拍照，俯瞰城市和峡湾全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从另一侧步道下山，探索更多宁静的住宅街区。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">攀登观景台台阶较多，建议穿舒适的鞋子。老城街道起伏且有鹅卵石路面，拉行李箱会不太方便。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **阿克斯拉观景台**：清晨或傍晚黄金时段，从山顶向下拍摄，能将彩色屋顶、峡湾和远山尽收镜头，层次感极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **布鲁斯安德码头边**：上午阳光照亮建筑正面时，拍摄建筑群在水面的完整倒影，画面宁静对称。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **Apollon街转角**：利用街道的弧度构图，拍摄两旁色彩缤纷、装饰华丽的建筑立面，充满纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **某条陡峭街巷的底部**：仰拍阶梯状上升的彩色房屋和远处的教堂尖顶，极具童话感和视觉冲击力。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民，避免对着私人住宅的窗户长时间拍摄。冬季日照时间短，需提前规划好拍照时间。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **高端之选**：斯卡恩布鲁酒店，位于港口历史建筑内，部分房间可直望海港和老城。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中端之选**：斯堪迪克奥勒松酒店，位置便利，现代舒适，步行即可到达老城核心区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济之选**：奥勒松港酒店，性价比高，提供基础住宿，距离老城稍近。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **特色体验**：寻找老城内的精品民宿或公寓，入住新艺术风格建筑内部，沉浸式体验历史氛围。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，需提前预订。住在老城中心虽然方便，但可能没有大型酒店，行李搬运需注意台阶。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松老城是一个关于希望与重生的地方。它用最绚丽的色彩和最浪漫的建筑，温柔地包裹了一段伤痛的过去。在这里，每一步都是风景，每一个转角都有惊喜。它不像那些宏伟到令人敬畏的古迹，而是亲切、精致、充满生活气息的。如果你也相信美丽可以从灰烬中诞生，那么一定要来这个北欧的童话小镇，亲自走一走，看一看，感受那份独特的历史温度与艺术浪漫。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放；部分建筑内部参观需参照各自开放时间。" />
                <InfoRow icon="🎫" label="门票" value="漫步老城街道免费；登顶阿克斯拉观景台（Aksla Viewpoint）免费；进入部分博物馆或建筑内部需单独购票。" />
                <InfoRow icon="📍" label="地址" value="Ålesund Sentrum, 6002 Ålesund, Norway" />
                <InfoRow icon="🚌" label="交通" value="从奥勒松机场（Ålesund Airport, Vigra）出发，乘坐机场巴士或出租车约20分钟即可抵达老城区。从奥斯陆或卑尔根乘坐火车需先至附近城市，再转乘巴士或轮渡。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
