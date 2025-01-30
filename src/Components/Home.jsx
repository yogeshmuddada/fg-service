import React from 'react'
import { Plus, Zap, BarChart3} from 'lucide-react';


export default function Home() {
    return (
        <div >
           
        <div className="relative min-h-screen container mx-auto px-4 flex items-center justify-center">
        
            <div className="w-full max-w-4xl">
                
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="btn-primary bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full">
                            <Plus className="w-5 h-5 mr-2" />
                            Add Revision
                        </button>
                        <button className="btn-primary bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 w-full">
                            <Zap className="w-5 h-5 mr-2" />
                            Get Revision
                        </button>
                        <button className="btn-primary bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 w-full">
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Update Roster
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
