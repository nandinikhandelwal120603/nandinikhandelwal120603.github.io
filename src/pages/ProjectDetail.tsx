import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Github, ExternalLink, Play, Server, Workflow, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectDetails } from "@/data/projectDetails";
import { projectsData } from "@/data/projectsData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const project = projectsData.find((p) => p.slug === slug);
  const detail = projectDetails[slug || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#100C08] text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => navigate("/")} variant="outline" className="border-[#f7838d] text-[#f7838d]">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100C08] text-white">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate("/")}
          className="flex items-center text-white/60 hover:text-[#f7838d] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Systems
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#f7838d]/20 text-[#f7838d] text-xs font-bold rounded-full border border-[#f7838d]/30">
                {project.type}
              </span>
              {project.tags?.map(tag => (
                <span key={tag} className="text-xs text-white/40 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex gap-4">
            {project.hasDemo && (
              <Button 
                className="bg-[#f7838d] text-black hover:bg-white hover:scale-105 transition-all px-8 py-6 rounded-full font-bold"
                onClick={() => setActiveTab('demo')}
              >
                {['automated-youtuber', 'manager-pro-dashboard'].includes(project.slug) ? 'View Visual Proof' : 'Live Demo'}
                {['automated-youtuber', 'manager-pro-dashboard'].includes(project.slug) ? <Play className="w-4 h-4 ml-2" /> : <ExternalLink className="w-4 h-4 ml-2" />}
              </Button>
            )}
            <Button variant="outline" className="border-white/20 hover:border-white px-8 py-6 rounded-full font-bold" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Repository
              </a>
            </Button>
          </div>
        </div>

        {/* Content Section */}
        {detail ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 mb-12 h-auto rounded-full flex-wrap justify-start">
              <TabsTrigger value="overview" className="rounded-full px-8 py-3 data-[state=active]:bg-[#f7838d] data-[state=active]:text-black">
                Overview
              </TabsTrigger>
              <TabsTrigger value="demo" className="rounded-full px-8 py-3 data-[state=active]:bg-[#f7838d] data-[state=active]:text-black">
                <Play className="w-4 h-4 mr-2" />
                {['automated-youtuber', 'manager-pro-dashboard'].includes(project.slug) ? 'System Gallery' : 'Live Experience'}
              </TabsTrigger>
              {/* ... other triggers ... */}
              <TabsTrigger value="system" className="rounded-full px-8 py-3 data-[state=active]:bg-[#f7838d] data-[state=active]:text-black">
                <Server className="w-4 h-4 mr-2" />
                System Design
              </TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-full px-8 py-3 data-[state=active]:bg-[#f7838d] data-[state=active]:text-black">
                <Workflow className="w-4 h-4 mr-2" />
                Workflow
              </TabsTrigger>
              {detail.agents && (
                <TabsTrigger value="agents" className="rounded-full px-8 py-3 data-[state=active]:bg-[#f7838d] data-[state=active]:text-black">
                  <Bot className="w-4 h-4 mr-2" />
                  Agents
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="overview" className="mt-0 space-y-16">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#f7838d]">The Problem</h3>
                  <p className="text-xl text-white/70 leading-relaxed">
                    {detail.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#f7838d]">The Insight</h3>
                  <p className="text-xl text-white/70 leading-relaxed italic border-l-4 border-[#f7838d] pl-6 py-2">
                    "{detail.insight}"
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
                <h3 className="text-3xl font-bold mb-8">Features That Matter</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {detail.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#f7838d] mt-2 shrink-0" />
                      <p className="text-lg font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {detail.gallery && detail.gallery.length > 0 && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold">System in Action</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {detail.gallery.map((img, i) => (
                      <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                        <img 
                          src={img} 
                          alt={`Gallery item ${i+1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detail.impact && (
                <div className="text-center py-12 border-t border-white/10">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 block">System Impact</span>
                  <p className="text-4xl font-black tracking-tight text-gradient bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                    {detail.impact}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="demo" className="mt-0">
              <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                {detail.demo?.video.startsWith('http') ? (
                  <div className="aspect-video w-full h-full relative">
                    <iframe
                      src={detail.demo.video.replace('/view', '/preview')}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute bottom-6 right-6 z-20">
                      <Button variant="secondary" className="bg-black/80 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full text-xs" asChild>
                        <a href={detail.demo.video} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Watch on Source
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (['automated-youtuber', 'manager-pro-dashboard'].includes(project.slug) && detail.gallery) ? (
                  <div className="p-12 space-y-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                      <h4 className="text-3xl font-bold mb-4">System Gallery & Proof</h4>
                      <p className="text-xl text-white/50 leading-relaxed italic">{detail.demo?.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {detail.gallery.map((img, i) => (
                        <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                          <img 
                            src={img} 
                            alt={`Gallery item ${i+1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-12">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <div className="w-20 h-20 bg-[#f7838d] rounded-full flex items-center justify-center text-black cursor-pointer transform scale-90 group-hover:scale-100 transition-transform shadow-[0_0_30px_rgba(247,131,141,0.5)]">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    </div>
                    <div className="text-center space-y-6 max-w-2xl px-6 relative z-0">
                      <div className="flex justify-center">
                        <Play className="w-16 h-16 text-[#f7838d]/20" />
                      </div>
                      <h4 className="text-3xl font-bold">Interactive Demo Sandbox</h4>
                      <p className="text-xl text-white/50 leading-relaxed italic">{detail.demo?.description}</p>
                      <p className="text-sm font-mono text-white/20 uppercase tracking-widest">VIDEO_STREAM_EMBED: {detail.demo?.video}</p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="system" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold">System Architecture</h3>
                  <div className="grid gap-6">
                    {detail.system?.sections.map((section, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#f7838d]/50 transition-all group">
                        <span className="text-[#f7838d] font-mono text-xs mb-3 block group-hover:translate-x-1 transition-transform">MODULE_0{i+1}</span>
                        <p className="font-bold text-xl">{section}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold">The Stack</h3>
                  <div className="flex flex-wrap gap-4">
                    {detail.system?.stack.map((tech) => (
                      <div key={tech} className="px-8 py-5 bg-[#f7838d] text-black font-black text-lg rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="p-10 bg-gradient-to-br from-[#f7838d]/10 to-transparent border border-[#f7838d]/20 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Server className="w-20 h-20" />
                    </div>
                    <p className="text-xl text-white/70 leading-relaxed italic relative z-10">
                      "Building as a self-contained operational system using {detail.system?.stack[0]} for maximum reliability and local-first execution."
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="workflow" className="mt-0">
              <div className="space-y-12 max-w-4xl">
                <h3 className="text-3xl font-bold mb-12">Agentic Workflow Pipeline</h3>
                <div className="relative pl-12">
                  <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#f7838d] via-[#f7838d]/20 to-transparent" />
                  <div className="space-y-16">
                    {detail.workflow?.map((step, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -left-12 w-12 h-12 bg-[#100C08] border-2 border-[#f7838d] rounded-xl flex items-center justify-center font-black text-xl text-[#f7838d] shadow-[0_0_20px_rgba(247,131,141,0.2)] group-hover:bg-[#f7838d] group-hover:text-black transition-all z-10">
                          {i+1}
                        </div>
                        <div className="pt-2">
                          <p className="text-2xl font-bold text-white group-hover:text-[#f7838d] transition-colors">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {detail.agents && (
              <TabsContent value="agents" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {detail.agents.map((agent, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#f7838d]/5 hover:border-[#f7838d]/30 transition-all group">
                      <div className="w-16 h-16 bg-[#f7838d]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <Bot className="w-8 h-8 text-[#f7838d]" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{agent.role}</h4>
                      <p className="text-xl text-white/50 leading-relaxed">{agent.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        ) : (
          <div className="p-20 text-center bg-white/5 rounded-3xl border border-white/10">
            <p className="text-2xl font-bold mb-4">Deep Case Study Coming Soon</p>
            <p className="text-white/40">We are currently compiling the system design documentation for this project.</p>
            <Button variant="outline" className="mt-8 border-white/20" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                Check GitHub History
              </a>
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
