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

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥勒松老城・Ålesund Old Town・挪威・奥勒松</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你走进了一个由糖果色积木搭建的童话小镇，这就是奥勒松老城给我的第一印象。1904年那场毁灭性的大火后，整个城市浴火重生，被统一规划重建为新艺术主义风格。漫步在蜿蜒的街道上，两边是尖顶、塔楼和装饰着龙、花卉浮雕的彩色房屋，仿佛走进了安徒生的故事书里。海风带着咸咸的味道，海鸥在头顶盘旋，港口停泊着漂亮的游艇。最棒的是爬上阿克斯拉山，从观景台俯瞰整个老城和峡湾，那些五彩的房子像乐高一样散落在岛屿和海峡之间，美得让人屏住呼吸。这里没有大城市的喧嚣，只有宁静、色彩和浓浓的历史艺术气息。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一个由糖果色积木搭建的童话小镇，这就是奥勒松老城给我的第一印象。1904年那场毁灭性的大火后，整个城市浴火重生，被统一规划重建为新艺术主义风格。漫步在蜿蜒的街道上，两边是尖顶、塔楼和装饰着龙、花卉浮雕的彩色房屋，仿佛走进了安徒生的故事书里。海风带着咸咸的味道，海鸥在头顶盘旋，港口停泊着漂亮的游艇。最棒的是爬上阿克斯拉山，从观景台俯瞰整个老城和峡湾，那些五彩的房子像乐高一样散落在岛屿和海峡之间，美得让人屏住呼吸。这里没有大城市的喧嚣，只有宁静、色彩和浓浓的历史艺术气息。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奥勒松老城" />
                <InfoRow label="英文名称" value="Ålesund Old Town" />
                <InfoRow label="正式名称" value="Ålesund Old Town" />
                <InfoRow label="国家" value="挪威" />
                <InfoRow label="城市" value="奥勒松" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；部分建筑内部参观需参照各自开放时间。" />
              <InfoRow label="门票价格" value="漫步老城街道免费；登顶阿克斯拉观景台（Aksla Viewpoint）免费；进入部分博物馆或建筑内部需单独购票。" />
              <InfoRow label="地址" value="Ålesund Sentrum, 6002 Ålesund, Norway" />
              <InfoRow label="交通方式" value="从奥勒松机场（Ålesund Airport, Vigra）出发，乘坐机场巴士或出租车约20分钟即可抵达老城区。从奥斯陆或卑尔根乘坐火车需先至附近城市，再转乘巴士或轮渡。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松的故事充满了戏剧性的转折。在1904年1月23日那个寒冷的夜晚，一场起因于工厂的灾难性大火，在狂风助力下几乎将这座木结构城市夷为平地，约1万人无家可归。然而，这场悲剧却成了城市新生的起点。当时，统治挪威的德国皇帝威廉二世迅速派船送来了援助物资，来自欧洲各地的建筑师，特别是德国和英国的，参与了重建工作。他们带来了当时欧洲最流行的新艺术运动风格。于是，在短短三年内，一座全新的、风格统一的石头城市从灰烬中崛起。建筑师们尽情发挥创意，用曲线代替直线，将挪威的神话动物、自然花卉融入建筑立面的石雕和铁艺装饰中。漫步今天的老城，你看到的不仅是建筑，更是一段关于 resilience（韧性）和社区精神的鲜活历史。它像一个凤凰涅槃的童话，把最深的伤痛变成了最独特的美丽。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从港口附近的游客中心开始，先感受海滨氛围，然后深入老城街区欣赏建筑细节，最后攀登418级台阶至阿克斯拉观景台俯瞰全景。全程步行，悠闲游览约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>攀登观景台台阶较多，建议穿舒适的鞋子。老城街道起伏且有鹅卵石路面，拉行李箱会不太方便。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从布鲁斯安德码头出发，欣赏彩色房屋在水中的倒影。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步Apollon街和Kongens gate，抬头细看建筑立面的浮雕和装饰。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观新艺术中心，了解建筑风格和历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  穿过小公园，开始攀登通往阿克斯拉观景台的台阶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  在观景台和山顶公园尽情拍照，俯瞰城市和峡湾全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从另一侧步道下山，探索更多宁静的住宅街区。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  阿克斯拉观景台</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚黄金时段，从山顶向下拍摄，能将彩色屋顶、峡湾和远山尽收镜头，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  布鲁斯安德码头边</h4>
                  <p className="text-sm text-gray-700">上午阳光照亮建筑正面时，拍摄建筑群在水面的完整倒影，画面宁静对称。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  Apollon街转角</h4>
                  <p className="text-sm text-gray-700">利用街道的弧度构图，拍摄两旁色彩缤纷、装饰华丽的建筑立面，充满纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  某条陡峭街巷的底部</h4>
                  <p className="text-sm text-gray-700">仰拍阶梯状上升的彩色房屋和远处的教堂尖顶，极具童话感和视觉冲击力。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民，避免对着私人住宅的窗户长时间拍摄。冬季日照时间短，需提前规划好拍照时间。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端之选</h4>
                  <p className="text-sm text-blue-800">斯卡恩布鲁酒店，位于港口历史建筑内，部分房间可直望海港和老城。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端之选</h4>
                  <p className="text-sm text-green-800">斯堪迪克奥勒松酒店，位置便利，现代舒适，步行即可到达老城核心区。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济之选</h4>
                  <p className="text-sm text-yellow-800">奥勒松港酒店，性价比高，提供基础住宿，距离老城稍近。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色体验</h4>
                  <p className="text-sm text-purple-800">寻找老城内的精品民宿或公寓，入住新艺术风格建筑内部，沉浸式体验历史氛围。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，需提前预订。住在老城中心虽然方便，但可能没有大型酒店，行李搬运需注意台阶。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松老城是一个关于希望与重生的地方。它用最绚丽的色彩和最浪漫的建筑，温柔地包裹了一段伤痛的过去。在这里，每一步都是风景，每一个转角都有惊喜。它不像那些宏伟到令人敬畏的古迹，而是亲切、精致、充满生活气息的。如果你也相信美丽可以从灰烬中诞生，那么一定要来这个北欧的童话小镇，亲自走一走，看一看，感受那份独特的历史温度与艺术浪漫。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
