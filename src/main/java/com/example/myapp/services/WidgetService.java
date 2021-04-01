package com.example.myapp.services;
import com.example.myapp.models.Widget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.myapp.repositories.WidgetRepository;
import java.util.ArrayList;
import java.util.List;


@Service
public class WidgetService {
    @Autowired
    WidgetRepository repository;

//    private List<Widget> widgets = new ArrayList<Widget>();
//    {
//
//
//    }
    // implement crud operations
    public Widget createWidgetForTopic(Widget widget) {
        return repository.save(widget);
//        Long id = (new Date()).getTime();
//        widget.setId(id);
//        widgets.add(widget);
//        return widget;
    }
    public List<Widget> findAllWidgets() {
return repository.findAllWidgets();
//        return (List<Widget>) repository.findAll();
//        return widgets;
    }
    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetForTopic(topicId);
//        List<Widget> ws = new ArrayList<Widget>();
//        for(Widget w: widgets) {
//            if(w.getTopicId().equals(topicId)) {
//                ws.add(w);
//            }
//        }
//        return ws;
    }
    public Widget findWidgetById(Long id) {
        return repository.findWidgetById(id);
//        return repository.findById(id).get();
//        for(Widget w: widgets) {
//            if(w.getId().equals(id)) {
//                return w;
//            }
//        }
//        return null;
    }
    public int updateWidget(Long id, Widget newWidget) {
        Widget originalWidget = repository.findById(id).get();
        if (newWidget.getText() != null) {
            originalWidget.setText(newWidget.getText());
        }
        if (newWidget.getType() != null) {
            originalWidget.setType(newWidget.getType());
        }
        if (newWidget.getSize() != null) {
            originalWidget.setSize(newWidget.getSize());
        }
        if (newWidget.getText() != null) {
            originalWidget.setText(newWidget.getText());
        }
        if (newWidget.getWidth() != null) {
            originalWidget.setWidth(newWidget.getWidth());
        }
        if (newWidget.getHeight() != null) {
            originalWidget.setHeight(newWidget.getHeight());
        }
        if (newWidget.getSrc() != null) {
            originalWidget.setSrc(newWidget.getSrc());
        }
        repository.save(originalWidget);
        return -1;
//        for(int i=0; i<widgets.size(); i++) {
//            Widget w = widgets.get(i);
//            if(w.getId().equals(id)) {
//                widgets.set(i, newWidget);
//                return 1;
//            }
//        }
//        return -1;
    }
    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
        return 1;
//        int index = -1;
//        for(int i=0; i<widgets.size(); i++) {
//            if(widgets.get(i).getId().equals(id)) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }
//        return -1;
    }
}